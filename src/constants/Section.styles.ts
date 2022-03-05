import styled from "styled-components";
import { Theme } from "../theme";
const { spaces } = Theme;

const Section = styled.section`
  position: relative;
  max-height: 100vh;
  width: ${`calc(100vw - ${spaces.h})`};
  display: flex;
  align-items: center;
  overflow: auto;
  border-bottom: 0.1rem solid;
`;

export default Section;
