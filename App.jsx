import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Searchbar,
  Appbar,
  Provider as PaperProvider,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import HomeScreen from "./screens/HomeScreen";
import SavedScreen from "./screens/SavedScreen";
import Bar from "./components/Bar";
import { lightTheme, darkTheme } from "./styles/themes";

const Tab = createMaterialTopTabNavigator();

const App = () => {
  const systemTheme = useColorScheme();
  const theme = systemTheme === "dark" ? darkTheme : lightTheme;
  const { colors } = theme;
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearchSubmit() {
    if (!searchQuery.trim()) return;
    store.dispatch(fetchResults(searchQuery.trim()));
  }

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar />
          <Appbar.Header
            style={{
              backgroundColor: colors.primary,
              margin: 5,
              elevation: 0,
            }}
          >
            <Searchbar
              placeholder="Search"
              onChangeText={setSearchQuery}
              value={searchQuery}
              onSubmitEditing={handleSearchSubmit}
              style={{
                elevation: 0,
                backgroundColor: colors.primary,
              }}
              selectionColor={colors.accent}
            />
          </Appbar.Header>
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
                  component={HomeScreen}
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
                  component={SavedScreen}
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
              <Bar />
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
