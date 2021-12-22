import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Provider as PaperProvider } from "react-native-paper";

import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import HomeScreen from "./screens/HomeScreen";
import SavedScreen from "./screens/SavedScreen";
import Bar from "./components/Bar";
import { lightTheme, darkTheme } from "./themes";

const Tab = createMaterialBottomTabNavigator();

// persistor.purge();

const App = () => {
  const systemTheme = useColorScheme();
  const theme = systemTheme === "dark" ? darkTheme : lightTheme;
  console.log(theme);

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer theme={theme}>
            <StatusBar
              style={theme.dark ? "dark" : "light"}
              backgroundColor={theme.colors.primary}
            />
            <SafeAreaProvider>
              <Tab.Navigator
                activeColor={
                  theme.dark ? theme.colors.primary : theme.colors.background
                }
              >
                <Tab.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons
                        name="home"
                        color={color}
                        size={26}
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
                        size={26}
                      />
                    ),
                  }}
                />
              </Tab.Navigator>
              <Bar />
            </SafeAreaProvider>
          </NavigationContainer>
        </PersistGate>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
