import { Center, Container, Spinner, Text } from "@chakra-ui/react";
import * as React from 'react';
import { useMeQuery } from '../generated/graphql';

const Profile: React.FC<{}> = () => {
  const { data, loading } = useMeQuery();
  if (loading) {
    return (
      <Center
        flexGrow={1}
      >
        <Spinner />
      </Center>
    );
  }

  return (
    <Container
      py={{ base: 20, md: 36 }}
      maxW="6xl"
    >
      <Text>Hello, {data?.me?.username}!</Text>
    </Container>
  );
};

export default Profile;