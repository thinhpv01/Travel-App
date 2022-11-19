import { View, Text, Button, Pressable } from "react-native";
import React from "react";

const SectionHeader = ({ title, onPress, buttonTitle }) => {
  return (
    <View className="flex-row justify-between items-center ml-6 mr-5 mt-6 mb-3">
      <Text className="text-[18px] font-bold">{title}</Text>
      <Pressable className="px-2 py-1 border-2 border-gray-800 rounded-md">
        <Text className="text-lg text-gray-800">{buttonTitle}</Text>
      </Pressable>
    </View>
  );
};

export default SectionHeader;
