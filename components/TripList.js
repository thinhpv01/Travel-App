import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import FavoriteButton from "./FavoriteButton";
import { width } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
const CARD_WIDTH = width / 2 - (24 + 24 / 2);
const CARD_HEIGHT = 220;

const TripList = ({ list }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row flex-wrap">
      {list.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            className="ml-6 mb-6"
            onPress={() => {
              navigation.navigate("TripDetails", { trip: item });
            }}
          >
            <View
              className="bg-white rounded-2xl shadow-sm shadow-gray-300"
              style={{ height: CARD_HEIGHT, width: CARD_WIDTH }}
            >
              <View
                className="rounded-tl-2xl rounded-tr-2xl overflow-hidden"
                style={{ width: CARD_WIDTH, height: CARD_HEIGHT - 60 }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT - 60,
                    resizeMode: "cover",
                  }}
                />
              </View>
              <View className="flex-row items-center mt-[6px] mx-4">
                <View>
                  <Text className="my-1 text-[14px] line-he font-bold text-gray-900 ">
                    {item.title}
                  </Text>
                  <Text className="text-[14px] text-gray-700 font-semibold">
                    {item.location}
                  </Text>
                </View>
                <FavoriteButton style={{ top: 4, right: 0 }} />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TripList;
