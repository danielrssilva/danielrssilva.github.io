import styled from "styled-components";
import { Theme } from "../../theme";
const { spaces } = Theme;

const Container = styled.nav`
  position: absolute;
  left: ${spaces.l};
  top: ${spaces.xxl};
  width: 100vw;
  overflow: visible;
  display: flex;
  justify-content: space-between;
`;

export default Container;
