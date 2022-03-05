import styled from "styled-components";
import Section from "../../constants/Section.styles";
import SquareProps from "./Info.types";
import { Theme } from "../../theme";
const { spaces, fonts } = Theme;

export const Container = styled(Section)`
  overflow-x: hidden;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  > div {
    flex-shrink: 0;
    flex-grow: 1;
  }
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${spaces.xxl};
  max-width: 90%;

  span:first-of-type:before {
    content: "<header>";
    margin-left: -${spaces.l};
    opacity: 0.5;
    font-weight: ${fonts.weight.light};
  }
  span:nth-child(2) {
    align-self: flex-end;
    position: relative;
    &:after {
      content: "</header>";
      position: absolute;
      right: -${spaces.lp};
      bottom: -${spaces.sp};
      opacity: 0.5;
      font-weight: ${fonts.weight.light};
    }
  }
`;

export const Square = styled.div<SquareProps>`
  position: absolute;
  border: 0.1rem solid;
  background: none;
  height: ${spaces.h};
  width: ${spaces.h};

  left: ${({ $left }) => $left && spaces.xxl};
  bottom: ${({ $left }) => $left && spaces.h};

  right: ${({ $left }) => !$left && spaces.xxl};
  top: ${({ $left }) => !$left && spaces.h};

  animation: ${({ $left }) => ($left ? "hoveringLeft 4s" : "hovering 7s")}
    ease-in-out infinite alternate-reverse;

  @keyframes hovering {
    0% {
      transform: translateY(0) rotate(15deg);
    }
    100% {
      transform: translateY(12%) rotate(5deg);
    }
  }

  @keyframes hoveringLeft {
    0% {
      transform: translateY(0) rotate(-15deg);
    }
    100% {
      transform: translateY(7%) rotate(-10deg);
    }
  }
`;
