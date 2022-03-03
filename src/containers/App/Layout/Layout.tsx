import React from "react";
import Navigation from "../Navigation";
import ThemeSwitcher from "../../../components/ThemeSwitcher";
import Main, { Container } from "./Layout.style";
import Info from "../../Info";
import About from "../../Sections/About";
import Career from "../../Sections/Career";
import Projects from "../../Sections/Projects";

const Layout = (): JSX.Element => {
  return (
    <Container>
      <Navigation />
      <Main>
        <Info />
        <About />
        <Career />
        <Projects />
      </Main>
      <ThemeSwitcher />
    </Container>
  );
};

export default Layout;
