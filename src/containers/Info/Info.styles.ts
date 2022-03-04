import styled from "styled-components";
import Section from "../../constants/Section.styles";
import SquareProps from "./Info.types";

export const Container = styled(Section)`
  overflow-x: hidden;
  height: 100vh;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem;
  max-width: 90%;
  position: relative;
  span:first-of-type:before {
    content: "<h1>";
    position: absolute;
    left: 2rem;
    top: 4rem;
    opacity: 0.5;
    font-weight: 100;
  }
  span:nth-child(2) {
    align-self: flex-end;
    position: relative;
    &:after {
      content: "</h1>";
      position: absolute;
      right: -4rem;
      bottom: -1rem;
      opacity: 0.5;
      font-weight: 100;
    }
  }
`;

export const Square = styled.div<SquareProps>`
  position: absolute;
  border: 1px solid black;
  height: 18rem;
  width: 18rem;
  left: ${({ $left }) => ($left ? "13rem" : "")};
  right: ${({ $left }) => ($left ? "" : "13rem")};
  bottom: ${({ $left }) => ($left ? "20rem" : "")};
  top: ${({ $left }) => ($left ? "" : "20rem")};
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
