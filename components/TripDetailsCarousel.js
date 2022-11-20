import React, { useRef } from "react";
import { Animated, Image, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { SharedElement } from "react-navigation-shared-element";
import { height, width } from "../constants/theme";
import CarouselIndicator from "./CarouselIndicator";

const TripDetailsCarousel = ({ slides, id }) => {
  const scrollAnimated = useRef(new Animated.Value(0)).current;

  return (
    <>
      <Animated.FlatList
        horizontal
        data={slides}
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollAnimated } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item: image, index }) => {
          if (!index) {
            return (
              <View style={{ height: height, width: width }}>
                <SharedElement
                  id={`trip.${id}.image`}
                  style={{ height: height, width: width }}
                >
                  <Image
                    source={image}
                    style={{
                      height: height,
                      width: width,
                      resizeMode: "cover",
                    }}
                  />
                </SharedElement>
              </View>
            );
          }
          return (
            <View style={{ height: height, width: width }}>
              <Image
                source={image}
                style={{ height: height, width: width, resizeMode: "cover" }}
              />
            </View>
          );
        }}
      />
      {slides.length > 1 && (
        <Animatable.View
          className="absolute bottom-[60px] items-center"
          style={{ width: width }}
          animation="fadeInUp"
          delay={550}
          duration={550}
          easing="ease-in-out"
        >
          <CarouselIndicator
            slidesCount={slides.length}
            slideWidth={width}
            dotSize={12}
            dotSpacing={8}
            scrollAnimated={scrollAnimated}
          />
        </Animatable.View>
      )}
    </>
  );
};

export default TripDetailsCarousel;
