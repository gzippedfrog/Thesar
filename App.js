import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import SavedScreen from "./screens/SavedScreen";
import SavedContext from "./context/savedContext";
import ResultsContext from "./context/resultsContext";
import { StatusBar } from "expo-status-bar";

function App() {
  const [saved, setSaved] = useState([]);
  const [results, setResults] = useState([]);

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
    <ResultsContext.Provider value={{ results, setResults }}>
      <SavedContext.Provider value={{ saved, setSaved }}>
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
      </SavedContext.Provider>
    </ResultsContext.Provider>
  );
}

export default App;
