import * as React from 'react';
import { Box, Button, Heading, Stack, Text, Link } from "@chakra-ui/react"
import { FaGithub } from 'react-icons/fa';

const Home: React.FC<{}> = () => {

  return (
    <Stack
      as={Box}
      textAlign="center"
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}
      px={{ base: 10 }}
      maxW="3xl"
    >
      <Heading>
        express-react
      </Heading>
      <Text>
        express-react is my template for a fullstack web app using Nodejs,
        Express, Postgres, GraphQL, and React. Inspired by this{" "}
        <Link color="teal.500" href="https://www.youtube.com/watch?v=I6ypD7qv3Z8" isExternal>Youtube Video</Link>.
        Check out GitHub repo below!
      </Text>
      <Stack
        direction={'column'}
        align={'center'}
      >
        <Button as="a" href="https://github.com/jvogit/express-react" leftIcon={<FaGithub />}>
          GitHub
        </Button>
      </Stack>
    </Stack>
  );
};

export default Home;
