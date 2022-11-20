import { View, Text } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
const Stack = createSharedElementStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
