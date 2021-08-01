import { Heading, Container, Stack } from "@chakra-ui/react";
import * as React from 'react';
import LoginForm from '../components/forms/LoginForm';

const Login: React.FC<{}> = () => {

  return (
    <Stack
      as={Container}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}
      maxWidth="3xl"
    >
      <Heading>
        Login
      </Heading>
      <LoginForm/>
    </Stack>
  );
};

export default Login;
