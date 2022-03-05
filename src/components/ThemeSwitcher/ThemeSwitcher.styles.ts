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
  border: 0.1rem solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.primary};
`;

export default Button;
