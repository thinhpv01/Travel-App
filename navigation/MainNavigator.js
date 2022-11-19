import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StatusBar } from "react-native";
import TabNavigator from "./TabNavigator";
import TripDetailScreen from "../screens/TripDetailScreen";
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={TabNavigator} />
        <Stack.Screen name="TripDetails" component={TripDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
