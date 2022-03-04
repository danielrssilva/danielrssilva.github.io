import React from "react";
import { H2, Subtitle2 } from "../../../components/Typography";
import Container from "./About.style";

const About = (): JSX.Element => {
  return (
    <Container id="about">
      <div className="image">Image</div>
      <div className="text">
        <div>
          <Subtitle2>
            Graduating at Federal Institute of São Paulo - System Analysis and
            Development technologist.
          </Subtitle2>
          <Subtitle2>
            Currently working from Brazil as a Junior Frontend developer
          </Subtitle2>
          <Subtitle2>
            And I also like designing my own pages and applications.
          </Subtitle2>
          <Subtitle2>
            I'm very curious when it comes to Web Development
          </Subtitle2>
        </div>
        <div className="tags">
          <Subtitle2>| Vue | React | Typescript | Javascript |</Subtitle2>
        </div>
      </div>
      <div className="title">
        <H2>Danny Who?</H2>
      </div>
    </Container>
  );
};

export default About;
