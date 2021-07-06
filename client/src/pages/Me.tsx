import { H1 } from "baseui/typography";
import React from "react";
import { useMeQuery } from "../generated/graphql";

const Me: React.FC<{}> = () => {
  const { data } = useMeQuery();

  return (
    <section>
      <H1>Hello, {data?.me?.username}</H1>
      <pre id="json" style={{ overflowX: "auto" }}>
        {
          JSON.stringify(data?.me, null, 2)
        }
      </pre>
    </section>
  );
};

export default Me;