import styled from "styled-components";
import Section from "../../../constants/Section.styles";
import { Theme } from "../../../theme";
const { spaces } = Theme;

const Container = styled(Section)`
  overflow: auto;
  height: 70vh;
  H2 {
    position: sticky;
    height: 100%;
    padding-top: ${spaces.xl};
    left: ${spaces.xl};
  }
`;

export default Container;
