import styled from "styled-components";
import {
  Typography,
  TypographyStyleTypes,
  TypographyTypeProps,
} from "./Typography.types";

const variants: Record<string, Record<string, string>> = Object.keys(
  Typography
).reduce((ac, type) => {
  const css = {
    [type]: TypographyStyleTypes[type].css,
  };
  return { ...ac, ...css };
}, {});

const StyledTextBase = styled.span<TypographyTypeProps>`
  font-size: "1.4rem";
  ${(props) => variants[props.textType]}
`;

export default StyledTextBase;
