import { ThemeState, ThemeAction, Theme } from "./Theme.types";

const ThemeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "toggleTheme": {
      const { theme } = state;
      const newState = { ...state };
      if (theme === Theme.MOON) {
        newState.theme = Theme.SUN;
        return newState;
      }
      newState.theme = Theme.MOON;
      return newState;
    }

    default: {
      throw new Error("Unhandled action type for AuthDispatchContext");
    }
  }
};
export default ThemeReducer;
