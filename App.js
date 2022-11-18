import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./navigation/MainNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return <MainNavigator />;
}
