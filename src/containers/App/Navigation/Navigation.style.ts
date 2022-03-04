import styled from "styled-components";
import { Theme } from "../../../theme";
const { spaces } = Theme;

const Container = styled.div`
  width: ${spaces.xh};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  border-right: 1px solid black;
  padding: ${spaces.l};
`;

export default Container;
