import { sun, moon } from "../../theme/Colors";
import { ThemeState, ThemeAction, Theme } from "./Theme.types";

const ThemeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "toggleTheme": {
      const { theme } = state;
      const newState = { ...state };
      if (theme.name === Theme.MOON) {
        newState.theme = sun;
        return newState;
      }
      newState.theme = moon;
      return newState;
    }

    default: {
      throw new Error("Unhandled action type for AuthDispatchContext");
    }
  }
};
export default ThemeReducer;
