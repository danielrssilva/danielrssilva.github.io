import React, { createContext, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { sun } from "../../theme/Colors";
import { ThemeState, ThemeDispatch, ThemeProviderProps } from "./Theme.types";
import ThemeReducer from "./ThemeReducer";

const initialState: ThemeState = { theme: sun };

export const ThemeContext = createContext<ThemeState>(initialState);
export const ThemeDispatchContext = createContext<ThemeDispatch | undefined>(
  undefined
);

function ThemeContextProvider({ children }: ThemeProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);
  return (
    <ThemeContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={state.theme}>{children}</ThemeProvider>
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

function useThemeState(): ThemeState {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeState must be used within a ThemeContextProvider");
  }
  return context;
}
function useThemeDispatch(): ThemeDispatch {
  const context = React.useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useThemeDispatch must be used within a ThemeContextProvider"
    );
  }
  return context;
}

export { ThemeContextProvider, useThemeState, useThemeDispatch };
