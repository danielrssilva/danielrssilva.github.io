import React, { ReactElement } from "react";
import LinkContainer from "../../constants/LinkContainer.styles";

const Socials = (): ReactElement => {
  return (
    <LinkContainer>
      <a
        href="https://github.com/danielrssilva"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/danielribeirossilva/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </LinkContainer>
  );
};

export default Socials;
