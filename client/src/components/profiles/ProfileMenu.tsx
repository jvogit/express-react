import { useApolloClient } from "@apollo/client";
import { Avatar, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useLogoutMutation, User } from '../../generated/graphql';
import { setAccessToken } from '../../utils/accessToken';

interface Props {
  user: Pick<User, 'id' | 'username'>
}

const ProfileMenu: React.FC<Props> = ({ user }) => {

  const [logout] = useLogoutMutation();
  const apolloClient = useApolloClient();
  const history = useHistory();

  return (
    <Menu
      placement="bottom-end"
    >
      <MenuButton>
        <Avatar
          size="sm"
          name={user.username}
        />
      </MenuButton>
      <MenuList>
        <MenuItem
          as={Link}
          to="/profile"
        >
          Profile
        </MenuItem>
        <MenuDivider/>
        <MenuItem
          onClick={async () => {
            await logout();
            setAccessToken("");
            await apolloClient.cache.reset();
            history.push("/");
          }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
