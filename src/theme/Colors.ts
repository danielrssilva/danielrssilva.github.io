import { Theme } from "../context/Theme/Theme.types";
import colorDefinition from "./colors.json";

const Colors = colorDefinition;

export const sun = {
  name: Theme.SUN,
  colors: {
    primary: "#0094FF",
    black: "#000",
    background: "#fff",
    border: "#0094FF",
  },
};

export const moon = {
  name: Theme.MOON,
  colors: {
    primary: "#0094FF",
    black: "#fff",
    background: "#000",
    border: "#0094FF",
  },
};

export default Colors;
