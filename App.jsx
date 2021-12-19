import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import HomeScreen from "./screens/HomeScreen";
import SavedScreen from "./screens/SavedScreen";
import Bar from "./components/Bar";

const Tab = createMaterialBottomTabNavigator();

// persistor.purge();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="#6200ee" />
        <SafeAreaProvider>
          <SafeAreaView style={{ height: "100%" }}>
            <Tab.Navigator barStyle={{ backgroundColor: "#6200ee" }}>
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
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
