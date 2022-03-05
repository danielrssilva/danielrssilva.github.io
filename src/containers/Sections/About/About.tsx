import React from "react";
import { H2, Subtitle2 } from "../../../components/Typography";
import Container, {
  ImageContainer,
  TitleContainer,
  TextContainer,
  TagsContainer,
} from "./About.style";

const About = (): JSX.Element => {
  return (
    <Container id="about">
      <ImageContainer>
        <Subtitle2>Image</Subtitle2> {/* Change to image */}
      </ImageContainer>

      <TitleContainer>
        <H2>Danny Who?</H2>
      </TitleContainer>

      <TextContainer>
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
        <TagsContainer>
          <Subtitle2>| Vue | React | Typescript | Javascript |</Subtitle2>
        </TagsContainer>
      </TextContainer>
    </Container>
  );
};

export default About;
