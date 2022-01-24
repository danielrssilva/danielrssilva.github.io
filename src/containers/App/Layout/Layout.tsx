import React from "react";
import Navigation from "../Navigation/Navigation";
import Main, { Container } from "./Layout.style";

const Layout = (): JSX.Element => {
  return (
    <Container>
      <Navigation />
      <Main>| main</Main>
    </Container>
  );
};

export default Layout;
