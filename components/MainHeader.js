import { View, Text } from "react-native";
import React from "react";
import Icon from "./Icon";

const MainHeader = ({ title }) => {
  return (
    <View className="flex-row justify-between items-center px-6 pt-4">
      <Icon icon="Hamburger" onPress={() => {}} />
      <Text className="text-xl font-bold">{title}</Text>
      <Icon icon="Notification" onPress={() => {}} />
    </View>
  );
};

export default MainHeader;
