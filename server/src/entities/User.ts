import { Field, Int, ObjectType } from "type-graphql";
import { PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, Entity } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date();

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt = new Date();

    @Field()
    @Column({ unique: true })
    username!: string;

    @Field()
    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column("int", { default: 0 })
    tokenVersion: number;
}
