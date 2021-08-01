import { Heading, Container, Stack } from "@chakra-ui/react";
import * as React from 'react';
import SignupForm from '../components/forms/SignupForm';

const Signup: React.FC<{}> = () => {

  return (
    <Stack
      as={Container}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}
      maxWidth="3xl"
    >
      <Heading>
        Create an Account
      </Heading>
      <SignupForm/>
    </Stack>
  );
};

export default Signup;
