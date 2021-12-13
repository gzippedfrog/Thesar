import * as React from "react";
import { View } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import SavedScreen from "./screens/SavedScreen";

const HomeRoute = () => <HomeScreen />;
const SavedRoute = () => <SavedScreen />;

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "saved", title: "Saved", icon: "bookmark" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    saved: SavedRoute,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}
