import styled from "styled-components";
import { Theme } from "../theme";
const { spaces } = Theme;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  align-self: flex-start;
  border-left: 0.1rem solid black;
  padding: ${spaces.s} 0 ${spaces.s} ${spaces.l};
  height: 18rem;
`;

export default LinkContainer;
