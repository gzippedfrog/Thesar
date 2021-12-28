import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import { lightTheme, darkTheme } from "./styles/themes";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Bar from "./components/Bar";

const Tab = createMaterialTopTabNavigator();

// Clear store (for testing)
// persistor.purge();

const App = () => {
  const systemTheme = useColorScheme();
  const theme = systemTheme === "dark" ? darkTheme : lightTheme;
  const { colors } = theme;

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar />
          <Header />
          <SafeAreaProvider>
            <NavigationContainer theme={theme}>
              <Tab.Navigator
                screenOptions={{
                  tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: "bold",
                  },
                  tabBarActiveTintColor: colors.accent,
                  tabBarInactiveTintColor: colors.appbarFg,

                  tabBarIndicatorStyle: {
                    backgroundColor: colors.accent,
                    height: 3,
                  },
                  tabBarStyle: {
                    backgroundColor: colors.primary,
                    elevation: 5,
                  },
                  tabBarItemStyle: { flexDirection: "row" },
                }}
              >
                <Tab.Screen
                  name="Home"
                  component={CardList}
                  initialParams={{ data: "results" }}
                  options={{
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons
                        name="home"
                        color={color}
                        size={24}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Saved"
                  component={CardList}
                  initialParams={{ data: "saved" }}
                  options={{
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons
                        name="bookmark"
                        color={color}
                        size={24}
                      />
                    ),
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
            <Bar />
          </SafeAreaProvider>
        </PersistGate>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
