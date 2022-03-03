import React from "react";
import Container from "./Navigation.style";
import Nav from "../../../components/Nav";
import Socials from "../../../components/Socials";
import { HashLink } from "react-router-hash-link";

const Navigation = (): JSX.Element => {
  return (
    <Container>
      <HashLink smooth to="#info">
        <div
          style={{
            alignSelf: "center",
            height: "13rem",
            width: "13rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
          }}
        >
          LOGO
        </div>
      </HashLink>
      <Nav />
      <Socials />
      <span>Daniel · Ribeiro</span>
    </Container>
  );
};

export default Navigation;
