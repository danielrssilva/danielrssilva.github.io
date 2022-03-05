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
  border-right: 0.1rem solid;
  padding: ${spaces.l};
`;

export default Container;
