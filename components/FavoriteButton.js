import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "./Icon";
const FavoriteButton = ({ active, style }) => {
  return (
    <View
      className="bg-white p-1 rounded-[20px] shadow-sm shadow-[gray-200] absolute top-5 right-5 z-[1]"
      style={style}
    >
      <TouchableOpacity>
        <Icon icon={active ? "FavoriteFilled" : "Favorite"} size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteButton;
