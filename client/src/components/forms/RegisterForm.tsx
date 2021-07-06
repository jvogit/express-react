import React from "react";
import { useState } from "react";
import { Button } from 'baseui/button';
import ValidatedFormInput from "./ValidatedFormInput";
import { useRegisterMutation } from "../../generated/graphql";
import { useHistory } from "react-router-dom";

const RegisterForm: React.FC<{}> = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [register] = useRegisterMutation();
  const history = useHistory();

  const validation = {
    username: (usernameInput: string) => true,
    email: (emailInput: string) => true,
    password: (passwordInput: string) => true,
    confirmPassword: (confirmPassword: string) => confirmPassword === password,
  };

  const validateAll = () => {
    return (
      validation["username"](username) &&
      validation["email"](email) &&
      validation["password"](password) &&
      validation["confirmPassword"](confirmPassword)
    );
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateAll()) {
      console.log("not all validated!");
      return;
    }

    const res = await register({
      variables: {
        options: {
          email,
          username,
          password
        }
      }
    });

    console.log(res);

    history.push("/login");
  }

  return (
    <form
      onSubmit={onSubmit}
    >
      <ValidatedFormInput
        label="Username"
        onChange={setUsername}
        onValidate={validation["username"]}
      />
      <ValidatedFormInput
        label="Email"
        type="email"
        onChange={setEmail}
        onValidate={validation["email"]}
      />
      <ValidatedFormInput
        label="Password"
        type="password"
        onChange={setPassword}
        onValidate={validation["password"]}
      />
      <ValidatedFormInput
        label="Confirm Password"
        type="password"
        onChange={setConfirmPassword}
        onValidate={validation["confirmPassword"]}
        errorMessage={"Passwords do not match!"}
      />
      <Button
        type="submit"
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;