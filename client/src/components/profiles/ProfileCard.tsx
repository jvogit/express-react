import { Avatar, Heading, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { User } from '../../generated/graphql';

interface Props {
  user: Pick<User, "id" | "username">
}

const ProfileCard: React.FC<Props> = ({ user }) => {
  return (
    <VStack
      maxW="960px"
      w="full"
      rounded={"xl"}
      spacing={6}
      boxShadow={'2xl'}
      p={6}
    >
      <Avatar
        size={"xl"}
        name={user.username}
      />
      <Heading>
        {user.username}
      </Heading>
      <pre id="json" style={{ alignSelf: "flex-start", textAlign: "left", overflowX: "auto" }}>
        {
          JSON.stringify(user, null, 2)
        }
      </pre>
    </VStack>
  );
};

export default ProfileCard;