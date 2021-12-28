import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import merge from "deepmerge";

let lightTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
let darkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

lightTheme.colors.primary = "#eceff1";
lightTheme.colors.accent = "#009bd0";
lightTheme.colors.appbarFg = "rgba(0,0,0,0.5)";

darkTheme.colors.primary = "#121212";
darkTheme.colors.accent = "#5eccff";
darkTheme.colors.appbarFg = "rgba(255,255,255,0.5)";

export { lightTheme, darkTheme };
