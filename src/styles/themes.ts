import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme
} from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from "@react-navigation/native";
import merge from "deepmerge";

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      ripple: string;
    }
  }
}

let defaultLightTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
let defaultDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export const lightTheme = {
  ...defaultLightTheme,
  colors: {
    ...defaultLightTheme.colors,
    primary: "#009bd0",
    accent: "#fff",
    ripple: "rgba(0,0,0,0.3)"
  }
};

export const darkTheme = {
  ...defaultDarkTheme,
  colors: {
    ...defaultDarkTheme.colors,
    primary: "#121212",
    accent: "#5eccff",
    ripple: "rgba(255,255,255,0.3)"
  }
};

export type Theme = typeof lightTheme;
