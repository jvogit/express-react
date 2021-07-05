import React from "react";
import { StyledBody } from "baseui/card";
import { H1, H2, Paragraph1 } from "baseui/typography";

const Home = () => {

  return (
    <section>
      <H1>express-react</H1>
      <Paragraph1>
        the ben awad way. my exploration into the express, react, postgresql stack. a template repository
        for quick setup.
      </Paragraph1>
      <H2>Features</H2>
      <StyledBody>
        <ul>
          <li>All typescript</li>
          <li>JWT Authentication</li>
          <li>Apollo Client</li>
          <li>baseweb UI</li>
        </ul>
      </StyledBody>
    </section>
  );
};

export default Home;