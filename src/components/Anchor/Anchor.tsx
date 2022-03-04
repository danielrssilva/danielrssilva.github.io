import React, { ReactElement } from "react";
import { HashLink } from "react-router-hash-link";

import LinkContainer from "../../constants/LinkContainer.styles";

const Anchor = (): ReactElement => {
  return (
    <LinkContainer>
      <HashLink smooth to="#about">
        <span>Icon</span> About
      </HashLink>
      <HashLink smooth to="#career">
        <span>Icon</span> Career
      </HashLink>
      <HashLink smooth to="#projects">
        <span>Icon</span> Projects
      </HashLink>
    </LinkContainer>
  );
};

export default Anchor;
