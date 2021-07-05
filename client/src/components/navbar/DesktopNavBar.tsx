import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderNavigation,
  StyledNavigationList,
  StyledNavigationItem,
  ALIGN,
} from "baseui/header-navigation";
import { HeadingXSmall } from "baseui/typography";

const DesktopNavBar: React.FC<{}> = () => {
  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <Link to="/">
            <HeadingXSmall $style={{ margin: "0" }} >express-react</HeadingXSmall>
          </Link>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
    </HeaderNavigation>
  );
};

export default DesktopNavBar;