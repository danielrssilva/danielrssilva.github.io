import React, { ReactElement } from "react";
import { HashLink } from "react-router-hash-link";
import { H4 } from "../Typography";

import Container from "./Curiosities.styles";

const curiositiesList = [
  "Cat lover",
  "Casual player",
  "Night Owl",
  "Competitive",
  "Season 2019 Master elo - LoL",
  "Tea lover",
  "Doctor Who fan",
  "Marvel enthusiast",
  "French fries lover",
];

const Curiosities = (): ReactElement => {
  return (
    <Container>
      {curiositiesList.map((curiosity) => (
        <H4>{curiosity}</H4>
      ))}
      {/* npm install react-simple-marquee --save */}
    </Container>
  );
};

export default Curiosities;
