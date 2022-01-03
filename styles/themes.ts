import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import merge from "deepmerge";

let defaultLightTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
let defaultDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const customLightTheme = {
  ...defaultLightTheme,
  colors: {
    ...defaultLightTheme.colors,
    primary: "#009bd0",
    accent: "white",
    tabPressColor: "rgba(0,0,0,0.3)",
  },
};

const customDarkTheme = {
  ...defaultDarkTheme,
  colors: {
    ...defaultDarkTheme.colors,
    primary: "#121212",
    accent: "#5eccff",
    tabPressColor: "rgba(255,255,255,0.3)",
  },
};

export { customLightTheme as lightTheme, customDarkTheme as darkTheme };
