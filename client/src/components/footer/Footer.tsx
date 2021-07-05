import React from "react";
import { ParagraphXSmall } from "baseui/typography";
import { Button, SHAPE, SIZE } from "baseui/button";

const Footer: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <div style={{ flex: 1 }} />
      <footer
        style={{
          marginTop: "5rem"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px"
          }}
        >
          <ParagraphXSmall>Built with React and baseweb</ParagraphXSmall>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10px"
            }}
          >
            <a href="https://github.com/jvogit/spring-react" target="_blank" rel="noreferrer" style={{ paddingRight: "1rem" }}>
              <Button
                size={SIZE.mini}
                shape={SHAPE.pill}
              >
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/justinnvo/">
              <Button
                size={SIZE.mini}
                shape={SHAPE.pill}
              >
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;