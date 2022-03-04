import styled from "styled-components";
import Section from "../../../constants/Section.styles";

const Container = styled(Section)`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 0.8fr 3fr;
  grid-template-areas:
    ". title"
    "image text";
  padding: 3rem;
  .image {
    grid-area: image;
    display: grid;
    justify-content: center;
    align-content: center;
    width: 50rem;
    height: 50rem;
    border: 1px solid black;
    align-self: center;
    justify-self: center;
  }

  .text {
    display: grid;
    grid-template-rows: 2.5fr 0.5fr;
    grid-auto-flow: row;
    grid-area: text;
    align-self: flex-start;
    padding: 0 4rem;
    height: 100%;
  }

  .tags {
    align-self: center;
  }

  .title {
    display: grid;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
    grid-area: title;
  }

  /* display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". title"
    "image text"
    "image text";

  .image {
    grid-area: image;
    display: grid;
    justify-content: center;
    align-content: center;
    width: 40rem;
    height: 40rem;
    div {
    border: 1px solid black;
    align-self: center;
    justify-self: center;
    }
  }

  .text {
    grid-area: text;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 2.5fr 0.5fr;
    p {
      margin: 6rem 0;
    }
  }

  .title {
    grid-area: title;
    display: grid;
    justify-items: center;
    align-items: center;
  }  */
`;

export default Container;
