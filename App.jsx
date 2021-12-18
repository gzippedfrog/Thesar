import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import HomeScreen from "./screens/HomeScreen";
import SavedScreen from "./screens/SavedScreen";

const App = () => {
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
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;
