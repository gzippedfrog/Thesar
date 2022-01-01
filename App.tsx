import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import color from "color";

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
  const { colors, dark } = theme;

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar style="light" />
          <SafeAreaProvider>
            <Header />
            <NavigationContainer theme={theme}>
              <Tab.Navigator
                screenOptions={{
                  tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: "bold",
                  },
                  tabBarActiveTintColor: colors.accent,
                  tabBarInactiveTintColor: color("#fff").alpha(0.5).toString(),
                  tabBarIndicatorStyle: {
                    backgroundColor: colors.accent,
                    height: 3,
                  },
                  tabBarStyle: {
                    backgroundColor: colors.primary,
                    elevation: 10,
                  },
                  tabBarItemStyle: { flexDirection: "row" },
                  tabBarPressColor: color(dark ? "#fff" : "#000")
                    .alpha(0.3)
                    .toString(),
                }}
                initialLayout={{ width: Dimensions.get("window").width }}
              >
                <Tab.Screen
                  name="Results"
                  component={CardList}
                  initialParams={{ data: "results" }}
                  options={{
                    tabBarIcon: icon("view-list"),
                  }}
                />
                <Tab.Screen
                  name="Saved"
                  component={CardList}
                  initialParams={{ data: "saved" }}
                  options={{ tabBarIcon: icon("bookmark") }}
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

function icon(name) {
  return ({ color }) => (
    <MaterialCommunityIcons name={name} color={color} size={24} />
  );
}

export default App;
