import styled from "styled-components";
import { Theme } from "../../theme";
const { spaces } = Theme;

const Button = styled.button`
  position: fixed;
  right: ${spaces.l};
  top: ${spaces.l};
  height: ${spaces.lp};
  width: ${spaces.lp};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export default Button;
