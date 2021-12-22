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

lightTheme.colors.primary = "#6200ee";
darkTheme.colors.primary = "#a877ed";

export { lightTheme, darkTheme };
