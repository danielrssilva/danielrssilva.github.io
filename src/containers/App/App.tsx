import React from "react";
import GobalStyle from "../../theme/GobalStyle.style";
import ResetStyle from "../../theme/Reset.style";
import { ThemeContextProvider } from "../../context/Theme/ThemeContext";
import Layout from "./Layout";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <GobalStyle />
        <ResetStyle />
        <Layout />
      </ThemeContextProvider>
    </>
  );
}

export default App;
