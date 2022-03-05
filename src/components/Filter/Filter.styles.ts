import styled from "styled-components";
import { Theme } from "../../theme";
import { FilterProps } from "./Filter.types";
const { spaces, fonts } = Theme;

const Container = styled.fieldset<FilterProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: ${spaces.xh};
  top: -${spaces.h};
  border-radius: 0.7rem;
  animation: ${({ render }) => (render ? "slidein" : "slideout")} 0.5s forwards;
  legend {
    background: inherit;
    margin-top: -${spaces.sp};
    width: 14rem;
    text-align: center;
    font-size: 2.2rem;
    font-weight: ${fonts.weight.regular};
  }

  @keyframes slidein {
    from {
      transform: translateY(1rem) scale(0.9);
      opacity: 0;
    }

    to {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
  @keyframes slideout {
    0% {
      transform: translateY(0);
      opacity: 1;
    }

    99% {
      transform: translateY(1rem) scale(0.9);
      opacity: 0;
    }

    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
`;

export default Container;
