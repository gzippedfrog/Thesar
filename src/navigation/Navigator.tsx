import { Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CardList from "../components/CardList";
import type { NavigatorProps, RootStackParamList } from "./types";

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

const Navigator = ({ theme }: NavigatorProps) => {
  const { colors } = theme;

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
          },
          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: "rgba(255,255,255,0.5)",
          tabBarIndicatorStyle: {
            backgroundColor: colors.accent,
            height: 3,
          },
          tabBarStyle: {
            backgroundColor: colors.primary,
            elevation: 10,
          },
          tabBarItemStyle: { flexDirection: "row" },
          tabBarPressColor: colors.tabPressColor,
        }}
        initialLayout={{ width: Dimensions.get("window").width }}
      >
        <Tab.Screen
          name="Results"
          component={CardList}
          initialParams={{ data: "results" }}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name={"view-list"}
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
                name={"bookmark"}
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
