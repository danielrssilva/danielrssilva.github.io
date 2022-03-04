import React from "react";
import { Container, Square, Header } from "./Info.styles";
import Curiosities from "../../components/Curiosities";
import { H1, H4 } from "../../components/Typography";

const Info = (): JSX.Element => {
  return (
    <Container id="info">
      <Curiosities />
      <Header>
        <span>
          <H1>Front-end</H1>
        </span>
        <span>
          <H1>Developer</H1>
          <H4>and sometimes UI Designer</H4>
        </span>
      </Header>
      <Square $left />
      <Square />
    </Container>
  );
};

export default Info;
