import styled from "styled-components";

const mainHeight = "100vh";

const Main = styled.main({
  overflow: "scroll",
  minHeight: mainHeight,
  height: mainHeight,
  maxHeight: mainHeight,
  width: "100%",
});

export const Container = styled.div`
  display: flex;
`;

export default Main;
