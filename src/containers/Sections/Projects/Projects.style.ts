import styled from "styled-components";
import Section from "../../../constants/Section.styles";
import { Theme } from "../../../theme";
const { spaces } = Theme;

const Container = styled(Section)`
  display: grid;
  grid-template-columns: repeat(5, 36rem);
  grid-template-rows: repeat(auto-fit, minmax(280px, 1fr));
  grid-template-areas: ". . title . .";
  grid-auto-flow: column;
  grid-row: auto;
  justify-content: flex-start;
  gap: ${spaces.lp};
  padding: ${spaces.lp};
  height: 100vh;
  overflow-x: auto;
  overflow-y: visible;
  margin-left: ${spaces.none};
`;

export const SectionTitle = styled.div`
  grid-area: title;
  position: relative;
  display: flex;
  justify-content: center;
  img {
    position: absolute;
    right: 5rem;
    top: -1rem;
    cursor: pointer;
  }
`;

export default Container;
