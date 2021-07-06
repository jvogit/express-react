import React from "react";
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { useState } from "react";
import { Button } from 'baseui/button';
import { MeDocument, MeQuery, useLoginMutation } from "../../generated/graphql";
import { setAccessToken } from "../../utils/accessToken";
import { useHistory } from "react-router-dom";

const LoginForm: React.FC<{}> = () => {

  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();
  const history = useHistory();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted", usernameOrEmail, password);
    const res = await login({
      variables: {
        usernameOrEmail,
        password
      },
      update: (store, { data }) => {
        if (!data) return null;

        store.writeQuery<MeQuery>({
          query: MeDocument,
          data: {
            me: data.login.user
          }
        })
      }
    });

    if (res.errors || !res.data || !res.data.login.accessToken) {
      console.error(res.errors);
      return;
    }
    console.log(res.data.login);
    setAccessToken(res.data.login.accessToken);
    history.push("/");
  }

  return (
    <form
      onSubmit={onSubmit}
    >
      <FormControl
        label={() => "Username"}
      >
        <Input
          required
          placeholder="Username/Email"
          onChange={(e) => setUsernameOrEmail(e.currentTarget.value)}
        />
      </FormControl>
      <FormControl
        label={() => "Password"}
      >
        <Input
          required
          placeholder="Password"
          onChange={(e) => setPassword(e.currentTarget.value)}
          type="password"
        />
      </FormControl>
      <Button
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;