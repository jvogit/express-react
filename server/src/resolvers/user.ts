import argon2 from "argon2";
import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver, UseMiddleware } from "type-graphql";
import { User } from "../entities/User";
import { isAuth } from "../middleware/isAuth";
import { MyContext } from "../types";
import { createRefreshToken, createAccessToken } from "../utils/auth";
import { sendRefreshToken } from "../utils/sendRefreshToken";
import { UsernamePasswordInput } from "./UsernamePasswordInput";

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
  @Field(() => User, { nullable: true })
  user?: User;
}

@ObjectType()
class LoginResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver(User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  @UseMiddleware(isAuth)
  me(
    @Ctx() { payload }: MyContext
  ) {
    if (!payload) {
      // not logged in
      return null;
    }

    return User.findOne(payload.userId);
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
  ) {
    // validate input here
    // email: valid email format
    // usernames: alphanumeric with underscores allowed

    const hashedPassword = await argon2.hash(options.password);

    try {
      const user = await User.create({
        email: options.email,
        username: options.username,
        password: hashedPassword,
      }).save();

      return {
        user
      };
    } catch (err) {
      console.log(err);

      return {
        errors: [
          {
            field: "any",
            message: "internal server error"
          }
        ]
      }
    }
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password") password: string,
    @Ctx() { res }: MyContext
  ) {
    const user = await User.findOne({
      where: usernameOrEmail.includes("@") ?
        { email: usernameOrEmail } :
        { username: usernameOrEmail }
    });

    if (!user) {
      return {
        errors: [
          {
            field: "usernameOrEmail",
            message: "User account does not exist!"
          }
        ]
      };
    }

    const isValid = await argon2.verify(user.password, password);

    if (!isValid) {
      return {
        errors: [
          {
            field: "usernameOrPassword",
            message: "Incorrect username or password!"
          }
        ]
      };
    }

    sendRefreshToken(res, createRefreshToken(user));
    const accessToken = createAccessToken(user);
    return {
      accessToken,
      user,
    };
  }

  @Mutation(() => Boolean)
  logout(
    @Ctx() { res }: MyContext
  ) {
    sendRefreshToken(res, "");

    return true;
  }
}