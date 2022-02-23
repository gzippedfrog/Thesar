// React
import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
// Redux
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
// Other
import { lightTheme, darkTheme } from "./src/styles/themes";
import Header from "./src/components/Header";
import Snack from "./src/components/Snack";
import Navigator from "./src/navigation/Navigator";

const App = () => {
  const systemTheme = useColorScheme();
  const theme = systemTheme === "dark" ? darkTheme : lightTheme;

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <StatusBar backgroundColor={theme.colors.primary} />
            <Header />
            <Navigator theme={theme} />
            <Snack />
          </SafeAreaProvider>
        </PersistGate>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
