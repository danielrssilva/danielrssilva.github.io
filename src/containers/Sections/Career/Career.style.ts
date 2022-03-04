import styled from "styled-components";
import Section from "../../../constants/Section.styles";

const Container = styled(Section)`
  overflow-y: auto;
  H2 {
    position: sticky;
    height: 100%;
    padding-top: 4rem;
    left: 5rem;
  }
`;

export default Container;
