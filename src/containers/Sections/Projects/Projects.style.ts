import styled from "styled-components";
import Section from "../../../constants/Section.styles";
import { Theme } from "../../../theme";
const { spaces } = Theme;

const Container = styled(Section)`
  display: grid;
  grid-template-columns: repeat(5, 36rem);
  grid-template-areas: "card card center card card";
  justify-content: flex-start;
  column-gap: ${spaces.lp};
  padding: ${spaces.lp};
  height: 100vh;
  overflow-x: visible;
  margin-left: ${spaces.none};
`;

export default Container;
