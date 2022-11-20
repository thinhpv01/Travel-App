import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { height, width } from "../constants/theme";
import Icon from "../components/Icon";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";
import TripDetailCard from "../components/TripDetailCard";
import TripDetailsCarousel from "../components/TripDetailsCarousel";

const TripDetailScreen = ({ navigation, route }) => {
  const { trip } = route.params;
  const slides = [trip.image, ...trip.gallery];
  return (
    <View className="flex-1">
      <Animatable.View
        animation="fadeIn"
        delay={400}
        duration={500}
        easing="ease-in-out"
        className="absolute left-4 top-4 z-10"
      >
        <Icon
          icon="ArrowLeft"
          style={{ tintColor: "#fff" }}
          onPress={() => navigation.goBack()}
        />
      </Animatable.View>
      <TripDetailsCarousel slides={slides} id={trip.id} />
      {/* <SharedElement
        id={`trip.${trip.id}.image`}
        style={StyleSheet.absoluteFillObject}
      >
        <View className="overflow-hidden absolute left-0 top-0 right-0 bottom-0">
          <Image
            source={trip.image}
            className="absolute left-0 top-0 right-0 bottom-0"
            style={{ width: width, height: height, resizeMode: "cover" }}
          />
        </View>
      </SharedElement> */}
      <TripDetailCard trip={trip} />
    </View>
  );
};

TripDetailScreen.sharedElements = (route) => {
  const { trip } = route.params;
  return [
    {
      id: `trip.${trip.id}.image`,
    },
  ];
};

export default TripDetailScreen;
