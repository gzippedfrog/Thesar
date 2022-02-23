import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CardList from "../components/CardList";
import type { NavigatorProps, RootStackParamList } from "./types";

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

const Navigator = ({ theme }: NavigatorProps) => {
  const { colors } = theme;
  const styles = getStyles(colors);

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: "rgba(255,255,255,0.5)",
          tabBarIndicatorStyle: styles.tabBarIndicator,
          tabBarStyle: styles.tabBar,
          tabBarItemStyle: styles.tabBarItem,
          tabBarPressColor: colors.ripple
        }}
        initialLayout={useWindowDimensions()}
      >
        <Tab.Screen
          name="Results"
          component={CardList}
          initialParams={{ data: "results" }}
          options={{ tabBarIcon: tabBarIcon("view-list") }}
        />
        <Tab.Screen
          name="Saved"
          component={CardList}
          initialParams={{ data: "saved" }}
          options={{ tabBarIcon: tabBarIcon("bookmark") }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const tabBarIcon =
  (name: string) =>
  ({ color }: { color: string }) =>
    <MaterialCommunityIcons name={name} color={color} size={24} />;

const getStyles = (colors: ReactNativePaper.ThemeColors) =>
  StyleSheet.create({
    tabBarLabel: {
      fontSize: 14,
      fontWeight: "bold"
    },
    tabBarIndicator: {
      backgroundColor: colors.accent,
      height: 3
    },
    tabBar: {
      backgroundColor: colors.primary,
      elevation: 5
    },
    tabBarItem: {
      flexDirection: "row"
    }
  });

export default Navigator;
