import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../components/MainHeader";
import ScreenHeader from "../components/SreenHeader";
import TopPlacesCarousel from "../components/TopPlacesCarousel";
import { PLACES, TOP_PLACES } from "../data";
import SectionHeader from "../components/SectionHeader";
import TripList from "../components/TripList";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <MainHeader title="Travel App" />
      <ScreenHeader mainTitle="Find Your" secondTitle="Dream Trip" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="Popular Trips"
          buttonTitle="See All"
          onPress={() => {}}
        />
        <TripList list={PLACES} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
