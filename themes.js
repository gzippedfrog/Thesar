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

lightTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: "#0097A7",
  },
};

darkTheme = {
  ...darkTheme,
  colors: {
    ...darkTheme.colors,
    primary: "#80DEEA",
  },
};

export { lightTheme, darkTheme };
