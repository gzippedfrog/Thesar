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

lightTheme.colors.primary = "#009bd0";
lightTheme.colors.accent = "white";

darkTheme.colors.primary = "#121212";
darkTheme.colors.accent = "#5eccff";

export { lightTheme, darkTheme };
