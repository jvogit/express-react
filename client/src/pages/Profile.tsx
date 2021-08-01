import { Center, Spinner } from "@chakra-ui/react";
import * as React from 'react';
import { useHistory } from "react-router-dom";
import ProfileCard from "../components/profiles/ProfileCard";
import { useMeQuery } from '../generated/graphql';

const Profile: React.FC<{}> = () => {
  const { data, loading } = useMeQuery();
  const history = useHistory();

  if (loading) {
    return (
      <Center
        flexGrow={1}
      >
        <Spinner />
      </Center>
    );
  }

  if (!data || !data.me) {
    history.push("/login");

    return (<div/>);
  }

  return (
    <Center
      py={{ base: 20, md: 36 }}
      maxW={{ base: "sm", md: "md" }}
      width="full"
    >
      <ProfileCard user={data.me}/>
    </Center>
  );
};

export default Profile;