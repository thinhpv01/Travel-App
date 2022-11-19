import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { width } from "../constants/theme";
import FavoriteButton from "./FavoriteButton";
import { useNavigation } from "@react-navigation/native";
const CARD_WIDTH = width - 80;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + 24;

const TopPlacesCarousel = ({ list }) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={list}
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      style={{ flexGrow: 0 }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(i) => i.id}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            className="ml-6"
            style={{ marginRight: index === list.length - 1 ? 24 : 0 }}
            onPress={() => navigation.navigate("TripDetails", { trip: item })}
          >
            <View
              className="my-3 shadow-sm shadow-gray-400"
              style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
              }}
            >
              <FavoriteButton />
              <View
                className="rounded-2xl overflow-hidden"
                style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
              >
                <Image
                  source={item.image}
                  className="object-cover"
                  style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
                />
              </View>
              <View
                className="absolute left-4"
                style={{ top: CARD_HEIGHT - 80 }}
              >
                <Text className="text-2xl font-bold text-white">
                  {item.title}
                </Text>
                <Text className="text-xl text-white">{item.location}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default TopPlacesCarousel;
