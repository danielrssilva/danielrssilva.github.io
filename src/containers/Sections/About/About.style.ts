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
`;

export const ImageContainer = styled.div`
  grid-area: image;
  display: grid;
  justify-content: center;
  align-content: center;
  width: ${spaces.xxh};
  height: ${spaces.xxh};
  border: 0.1rem solid;
  align-self: center;
  justify-self: center;
`;
export const TitleContainer = styled.div`
  grid-area: title;
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  align-content: center;
`;
export const TextContainer = styled.div`
  grid-area: text;
  display: grid;
  grid-template-rows: 2.5fr 0.5fr;
  padding: ${spaces.none} ${spaces.lp};
  height: 100%;
`;
export const TagsContainer = styled.div`
  align-self: center;
`;
export default Container;
