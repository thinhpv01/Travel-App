import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
