import styled from "styled-components";
import { Theme } from "../../theme";
const { spaces, fonts } = Theme;

const Container = styled.fieldset`
  position: relative;
  width: 36rem;
  padding: 2rem;
  padding-top: 1rem;
  border: 0.1rem solid;
  border-radius: 0.5rem;
  background-color: inherit;
  display: grid;
  row-gap: 2rem;
  img {
    max-width: 100%;
    width: auto;
    height: auto;
  }
  legend {
    background: inherit;
    margin-top: -${spaces.sp};
    padding: 0 0.6rem;
    font-size: 3rem;
  }
  label {
    font-size: ${fonts.size};
    font-weight: ${fonts.weight.thin};
    line-height: ${fonts.lineHeight};
  }
  span {
    line-height: 1.6rem;
    font-weight: ${fonts.weight.thin};
    text-align: justify;
  }
`;

export const TagsContainer = styled.div`
  position: absolute;
  right: 2rem;
  top: -3rem;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0.5rem;
  display: grid;
  grid-auto-flow: column;
  column-gap: 0.5rem;
  img {
    height: 20px;
    width: 20px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const StyledContainer = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  column-gap: 1rem;
  justify-content: flex-start;
`;

export const TechsContainer = styled(StyledContainer)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LangsContainer = styled(StyledContainer)`
  margin-left: 1.5rem;
  ::before {
    content: "{";
    position: absolute;
    left: -2rem;
    font-weight: 100;
    font-size: 4rem;
    opacity: 0.6;
    top: 40%;
    transform: translateY(-50%);
  }
  ::after {
    content: "}";
    position: absolute;
    right: -2.2rem;
    font-weight: 100;
    font-size: 4rem;
    opacity: 0.6;
    top: 41%;
    transform: translateY(-50%);
  }
`;

export const LinksContainer = styled(StyledContainer)`
  align-items: center;
  justify-content: center;
`;

export default Container;
