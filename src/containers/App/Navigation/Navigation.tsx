import React from "react";
import Container from "./Navigation.style";
import Anchor from "../../../components/Anchor";
import { Subtitle1 } from "../../../components/Typography";
import Socials from "../../../components/Socials";
import { HashLink } from "react-router-hash-link";

const Navigation = (): JSX.Element => {
  return (
    <Container>
      <HashLink smooth to="#info">
        <div // Change to logo
          style={{
            justifySelf: "center",
            height: "17rem",
            width: "17rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
          }}
        >
          <Subtitle1>Logo</Subtitle1>
        </div>
      </HashLink>
      <Anchor />
      <Socials />
      <Subtitle1>Daniel · Ribeiro</Subtitle1>
    </Container>
  );
};

export default Navigation;
