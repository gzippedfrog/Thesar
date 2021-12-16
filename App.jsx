import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import HomeScreen from "./screens/HomeScreen";
import SavedScreen from "./screens/SavedScreen";
import appReducer from "./redux/appReducer";

const store = configureStore({ reducer: appReducer });

function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "saved", title: "Saved", icon: "bookmark" },
  ]);
  const HomeRoute = () => <HomeScreen />;
  const SavedRoute = () => <SavedScreen />;
  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    saved: SavedRoute,
  });

  return (
    <Provider store={store}>
      <StatusBar style="light" backgroundColor="#6200ee" />
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            height: "100%",
            backgroundColor: "#eee",
          }}
        >
          <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
