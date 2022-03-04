import React from "react";
import { Container, Square, Title } from "./Info.styles";
import Curiosities from "../../components/Curiosities";
import { H1, H4 } from "../../components/Typography";

const Info = (): JSX.Element => {
  return (
    <Container id="info">
      <Curiosities />
      <Title>
        <span>
          <H1>Front-end</H1>
        </span>
        <span>
          <H1>Developer</H1>
          <H4>and sometimes UI Designer</H4>
        </span>
      </Title>
      <Square $left />
      <Square />
    </Container>
  );
};

export default Info;
