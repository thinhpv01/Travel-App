import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "./Icon";

const MainHeader = ({ title }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="flex-row justify-between items-center px-6"
      style={{ marginTop: insets.top }}
    >
      <Icon icon="Hamburger" onPress={() => {}} />
      <Text className="text-xl font-bold">{title}</Text>
      <Icon icon="Notification" onPress={() => {}} />
    </View>
  );
};

export default MainHeader;
