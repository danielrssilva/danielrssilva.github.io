import styled from "styled-components";
import { Theme } from "../../theme";
const { fonts } = Theme;

const Container = styled.div`
  label {
    font-size: ${fonts.size};
    font-weight: ${fonts.weight.thin};
    line-height: ${fonts.lineHeight};
  }
`;

export default Container;
