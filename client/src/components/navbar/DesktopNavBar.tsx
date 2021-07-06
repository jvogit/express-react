import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  HeaderNavigation,
  StyledNavigationList,
  StyledNavigationItem,
  ALIGN,
} from "baseui/header-navigation";
import { HeadingXSmall } from "baseui/typography";
import { Button } from "baseui/button";
import { useLogoutMutation, useMeQuery } from "../../generated/graphql";
import "./navbar.css"
import { setAccessToken } from "../../utils/accessToken";

const DesktopNavBar: React.FC<{}> = () => {
  const { data, loading, error } = useMeQuery();
  const [logout, { client }] = useLogoutMutation();
  const history = useHistory();

  return (
    <HeaderNavigation
      overrides={{
        Root: {
          style: {
            paddingTop: "0px",
            paddingBottom: "0px",
            paddingLeft: "12%",
            paddingRight: "12%",
            height: "4rem"
          }
        }
      }}
    >
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <Link to="/">
            <HeadingXSmall $style={{ margin: "0" }}>express-react</HeadingXSmall>
          </Link>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        {error || loading || !data ? (
          <StyledNavigationItem>
            <Button
              onClick={() => {
                history.push("/login")
              }}
            >
              Login
            </Button>
          </StyledNavigationItem>
        ) : (
          <React.Fragment>
            <StyledNavigationItem>
              <Button
                onClick={async () => {
                  await logout();
                  setAccessToken("");
                  // workaround for unhandled promise issue in Apollo
                  await client.resetStore().catch(err => {});
                }}
              >
                Logout
              </Button>
            </StyledNavigationItem>
            <StyledNavigationItem>
              Hello, {data?.me?.username}!
            </StyledNavigationItem>
          </React.Fragment>
        )
        }
      </StyledNavigationList>
    </HeaderNavigation>
  );
};

export default DesktopNavBar;