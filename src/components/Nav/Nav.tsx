import React, { ReactElement } from "react";
import { HashLink } from "react-router-hash-link";

import NavBar from "./Nav.styles";

const Nav = (): ReactElement => {
  return (
    <NavBar>
      <HashLink smooth to="#about">
        <span>Icon</span> About
      </HashLink>
      <HashLink smooth to="#career">
        <span>Icon</span> Career
      </HashLink>
      <HashLink smooth to="#projects">
        <span>Icon</span> Projects
      </HashLink>
    </NavBar>
  );
};

export default Nav;
