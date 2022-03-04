import styled from "styled-components";

const Section = styled.section`
  position: relative;
  max-height: 100vh;
  width: calc(100vw - 22.1rem);
  display: flex;
  align-items: center;
  overflow: auto;
  border-bottom: 1px solid black;
  > div {
    flex-shrink: 0;
    flex-grow: 1;
  }
`;

export default Section;
