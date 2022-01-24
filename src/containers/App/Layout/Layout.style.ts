import styled from "styled-components";

const mainHeight = "100vh";

const Main = styled.main({
  minHeight: mainHeight,
  height: mainHeight,
  maxHeight: mainHeight,
});

export const Container = styled.div`
  display: flex;
`;

export default Main;
