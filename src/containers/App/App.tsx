import React from "react";
import ResetStyle from "../../theme/Reset.style";
import { ThemeContextProvider } from "../../context/Theme/ThemeContext";
import Layout from "./Layout";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ResetStyle />
        <Layout />
      </ThemeContextProvider>
    </>
  );
}

export default App;
