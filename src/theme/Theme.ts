import spaces from "./spaces.json";
import colors from "./colors.json";
import fonts from "./fonts.json";
import zIndexes from "./zIndexes.json";

const Theme = {
  colors,
  fonts,
  spaces,
  zIndexes,
  notificationTimer: 5, // Seconds
  tooltip_delay: 0.8, // In seconds
  debounceTime: 500, // Milliseconds
};

export default Theme;
