import { ReactNode } from "react";

export enum Theme {
  SUN = "SUN",
  MOON = "MOON",
}
export interface ThemeState {
  theme: Theme;
}

export type ThemeAction = {
  type: "toggleTheme";
};

export type ThemeDispatch = (action: ThemeAction) => void;

export type ThemeProviderProps = { children: ReactNode };
