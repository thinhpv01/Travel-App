import { View, Text } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
const TripDetailCard = ({ trip }) => {
  return (
    <View className="absolute bottom-0 left-0 right-0 h-[30%]">
      <Animatable.View
        animation="fadeInUp"
        delay={300}
        duration={600}
        easing="ease-in-out"
        className="p-6"
      >
        <Text className="text-[32px] font-bold text-white">{trip.title}</Text>
        <Text className="text-3xl text-white">{trip.location}</Text>
      </Animatable.View>
    </View>
  );
};

export default TripDetailCard;
