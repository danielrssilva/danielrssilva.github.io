import React, { ReactElement } from "react";
import Button from "./ThemeSwitcher.styles";
import {
  useThemeDispatch,
  useThemeState,
} from "../../context/Theme/ThemeContext";

const ThemeSwitcher = (): ReactElement => {
  const themeDispatch = useThemeDispatch();
  const { theme } = useThemeState();

  return (
    <Button
      onClick={() =>
        themeDispatch({
          type: "toggleTheme",
        })
      }
      theme={theme}
    >
      {theme}
    </Button>
  );
};

export default ThemeSwitcher;
