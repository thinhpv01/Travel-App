import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import TabNavigator from "./TabNavigator";
import TripDetailScreen from "../screens/TripDetailScreen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
const Stack = createSharedElementStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{ useNativeDriver: true, gestureEnabled: false }}
        />
        <Stack.Screen
          name="TripDetails"
          component={TripDetailScreen}
          options={{
            useNativeDriver: true,
            gestureEnabled: false,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: { opacity: progress },
            }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
