import React, { useState, useRef } from "react";
import { View, Text, PanResponder, Animated, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const PriceSlider = () => {
  const [value, setValue] = useState(250);
  const [sliderWidth, setSliderWidth] = useState(0);
  const minValue = 0;
  const maxValue = 500;

  // Animated values for smooth movement
  const thumbPosition = useRef(new Animated.Value(0)).current;
  const trackWidth = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt) => {
      // Set initial position based on current value
      const initialPercentage =
        ((value - minValue) / (maxValue - minValue)) * 100;
      const initialPosition = (initialPercentage / 100) * sliderWidth;
      thumbPosition.setValue(initialPosition);
    },
    onPanResponderMove: (evt, gestureState) => {
      const { locationX } = evt.nativeEvent;
      const clampedX = Math.max(0, Math.min(sliderWidth, locationX));

      // Smooth thumb movement
      thumbPosition.setValue(clampedX);

      // Update track width
      trackWidth.setValue(clampedX);

      // Calculate and update value for display (but don't cause re-render jumps)
      const percentage = (clampedX / sliderWidth) * 100;
      const newValue = Math.round(
        minValue + (percentage / 100) * (maxValue - minValue)
      );
      setValue(newValue);
    },
    onPanResponderRelease: (evt, gestureState) => {
      // Final value calculation
      const { locationX } = evt.nativeEvent;
      const clampedX = Math.max(0, Math.min(sliderWidth, locationX));
      const percentage = (clampedX / sliderWidth) * 100;
      const finalValue = Math.round(
        minValue + (percentage / 100) * (maxValue - minValue)
      );
      setValue(finalValue);
    },
  });

  const getCurrentPercentage = () => {
    return ((value - minValue) / (maxValue - minValue)) * 100;
  };

  const handleSliderLayout = (event) => {
    const width = event.nativeEvent.layout.width;
    setSliderWidth(width);

    // Initialize animated values
    const initialPercentage = getCurrentPercentage();
    const initialPosition = (initialPercentage / 100) * width;
    thumbPosition.setValue(initialPosition);
    trackWidth.setValue(initialPosition);
  };

  return (
    <View className="flex-1 ">
      <View className="flex-1 justify-center mt-[3%] px-[6%]">
        <View className="">
          {/* Header */}
          <Text className="font-poppins-semiBold text-[#6B7280] text-base mb-[3%]">
            Pricing
          </Text>

          {/* Value Display */}
          <View className="flex-row justify-between items-center mb-[1%]">
            <Text className="font-poppins-500medium text-xs  text-[#175994]">
              ${value}
            </Text>
            <Text className="font-poppins-500medium text-xs  text-[#175994]">
              ${maxValue}
            </Text>
          </View>

          {/* Slider Track */}
          <View
            className="relative h-[6px]  bg-gray-200 rounded-full mb-[6%]"
            onLayout={handleSliderLayout}
            {...panResponder.panHandlers}
          >
            {/* Active Track - Animated */}
            <Animated.View
              className="absolute h-full bg-[#1F82B9] rounded-full"
              style={{
                width: trackWidth.interpolate({
                  inputRange: [0, sliderWidth || 1],
                  outputRange: [0, sliderWidth || 1],
                  extrapolate: "clamp",
                }),
              }}
            />

            {/* Slider Thumb - Animated */}
            <Animated.View
              className="absolute w-[15px] h-[15px] bg-[#1F82B9] rounded-full border border-white shadow-md"
              style={{
                left: thumbPosition.interpolate({
                  inputRange: [0, sliderWidth || 1],
                  outputRange: [0, sliderWidth || 1],
                  extrapolate: "clamp",
                }),
                top: -5, // Center vertically
                marginLeft: -12, // Half of thumb width for centering
              }}
            />
          </View>

          {/* Current Value */}
          {/* <View className="items-center mt-[4%]">
            <Text className="text-gray-800 text-2xl font-bold">${value}</Text>
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default PriceSlider;
