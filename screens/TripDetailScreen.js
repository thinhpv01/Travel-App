import { View, Text, Image } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { height, width } from "../constants/theme";
import Icon from "../components/Icon";

const TripDetailScreen = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const { trip } = route.params;
  return (
    <View className="flex-1">
      <View className="absolute left-4 top-4 z-10">
        <Icon
          icon="ArrowLeft"
          style={{ tintColor: "#fff" }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View className="rounded-2xl overflow-hidden absolute left-0 top-0 right-0 bottom-0">
        <Image
          source={trip.image}
          className="absolute left-0 top-0 right-0 bottom-0"
          style={{ width: width, height: height, resizeMode: "cover" }}
        />
      </View>
    </View>
  );
};

export default TripDetailScreen;
