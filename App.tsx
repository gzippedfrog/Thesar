import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import { lightTheme, darkTheme } from "./styles/themes";
import Header from "./components/Header";
import Bar from "./components/Bar";
import Navigator from "./navigation/Navigator";

const App = () => {
  const systemTheme = useColorScheme();
  const theme = systemTheme === "dark" ? darkTheme : lightTheme;

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar style="light" />
          <SafeAreaProvider>
            <Header />
            <Navigator theme={theme} />
            <Bar />
          </SafeAreaProvider>
        </PersistGate>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
