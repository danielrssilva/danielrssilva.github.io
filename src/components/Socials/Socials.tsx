import React, { ReactElement } from "react";
import Container from "./Socials.styles";

const Socials = (): ReactElement => {
  return (
    <Container>
      <a href="https://github.com/danielrssilva" target="_blank">
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/danielribeirossilva/"
        target="_blank"
      >
        LinkedIn
      </a>
    </Container>
  );
};

export default Socials;
