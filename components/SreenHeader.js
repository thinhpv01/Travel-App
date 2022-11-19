import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { sizes, spacing } from "../constants/theme";

const ScreenHeader = ({ mainTitle, secondTitle }) => {
  return (
    <View className="p-6">
      <Text className="text-4xl font-bold">{mainTitle}</Text>
      <Text className="text-3xl">{secondTitle}</Text>
    </View>
  );
};

export default ScreenHeader;
