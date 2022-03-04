import styled from "styled-components";
import Section from "../../../constants/Section.styles";
import { Theme } from "../../../theme";
const { spaces } = Theme;

const Container = styled(Section)`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 0.8fr 3fr;
  grid-template-areas:
    ". title"
    "image text";
  padding: ${spaces.l};
  .image {
    grid-area: image;
    display: grid;
    justify-content: center;
    align-content: center;
    width: ${spaces.xxh};
    height: ${spaces.xxh};
    border: 1px solid black;
    align-self: center;
    justify-self: center;
  }

  .text {
    display: grid;
    grid-template-rows: 2.5fr 0.5fr;
    grid-auto-flow: row;
    grid-area: text;
    align-self: flex-start;
    padding: ${spaces.none} ${spaces.lp};
    height: 100%;
  }

  .tags {
    align-self: center;
  }

  .title {
    display: grid;
    grid-auto-flow: row;
    justify-content: center;
    align-content: center;
    grid-area: title;
  }
`;

export default Container;
