import { View, Text, Animated, StyleSheet } from "react-native";
import React, { useRef } from "react";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "../components/Icon";
import { width } from "../constants/theme";
const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: "Home",
    screen: HomeScreen,
  },
  {
    name: "Search",
    screen: SearchScreen,
  },
  {
    name: "Favorite",
    screen: FavoriteScreen,
  },
];

const TabNavigator = () => {
  const offsetAnimation = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { height: 60 },
        }}
      >
        {tabs.map(({ name, screen }, index) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={screen}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Icon
                      icon={name}
                      size={40}
                      style={{ tintColor: focused ? "#070f18" : "#8b8989" }}
                    />
                  );
                },
              }}
              listeners={{
                focus: () => {
                  Animated.spring(offsetAnimation, {
                    toValue: index * (width / tabs.length),
                    useNativeDriver: true,
                  }).start();
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
      <Animated.View
        style={[
          styles.indicator,
          { transform: [{ translateX: offsetAnimation }] },
        ]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: "absolute",
    width: 20,
    height: 2,
    left: width / tabs.length / 2 - 10,
    bottom: 8,
    backgroundColor: "#070f18",
    zIndex: 100,
  },
});

export default TabNavigator;
