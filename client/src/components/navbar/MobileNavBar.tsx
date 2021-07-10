import { Button, KIND } from "baseui/button";
import { HeaderNavigation, StyledNavigationList, ALIGN, StyledNavigationItem } from "baseui/header-navigation";
import { Menu } from "baseui/icon";
import { SIZE } from "baseui/input";
import { HeadingXSmall } from "baseui/typography";
import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Drawer } from 'baseui/drawer';
import { useLogoutMutation, useMeQuery } from "../../generated/graphql";
import { setAccessToken } from "../../utils/accessToken";

const MobileNavBar: React.FC<{}> = () => {
  const { data, loading, error } = useMeQuery();
  const [logout, { client }] = useLogoutMutation();
  const [open, setOpen] = useState(false);
  const history = useHistory();

  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <Link to="/" style={{ textDecoration: "inherit", color: "inherit", }}>
            <HeadingXSmall $style={{ margin: "0" }} >express-react</HeadingXSmall>
          </Link>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Button
            kind={KIND.minimal}
            size={SIZE.mini}
            onClick={() => setOpen(true)}
          >
            <Menu size={32} />
          </Button>
          <Drawer
            isOpen={open}
            renderAll
            onClose={() => setOpen(false)}
          >
            {error || loading || !data ? (
              <Button
                onClick={() => {
                  history.push("/login")
                }}
              >
                Login
              </Button>
            ) : (
              <React.Fragment>
                <div>
                  Hello, {data?.me?.username}!
                </div>
                <Button
                  onClick={() => history.push("/me")}
                >
                  Me
                </Button>
                <Button
                  onClick={async () => {
                    await logout();
                    setAccessToken("");
                    // workaround for unhandled promise issue in Apollo
                    await client.resetStore().catch(err => { });
                  }}
                >
                  Logout
                </Button>
              </React.Fragment>
            )
            }
          </Drawer>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
};

export default MobileNavBar;
