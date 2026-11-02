import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  runOnJS,
  clamp,
} from "react-native-reanimated";

export default function AccuratePricingProgressBar() {
  const [price, setPrice] = useState(150);
  const [sliderWidth, setSliderWidth] = useState(0);
  const minPrice = 10;
  const maxPrice = 500;

  // Calculate initial position based on price
  const getPositionFromPrice = (price) => {
    return ((price - minPrice) / (maxPrice - minPrice)) * 100;
  };

  const translateX = useSharedValue(getPositionFromPrice(price));

  const updatePrice = (position) => {
    const newPrice = Math.round(
      minPrice + (position / 100) * (maxPrice - minPrice)
    );
    setPrice(newPrice);
  };

  const gestureHandler = Gesture.Pan()
    .onStart(() => {
      "worklet";
      // Store the initial position when gesture starts
    })
    .onUpdate((event) => {
      "worklet";
      if (sliderWidth > 0) {
        // Convert pixel movement to percentage based on actual slider width
        const percentageChange = (event.changeX / sliderWidth) * 100;
        const newPosition = clamp(translateX.value + percentageChange, 0, 100);
        translateX.value = newPosition;
        runOnJS(updatePrice)(newPosition);
      }
    })
    .onEnd(() => {
      "worklet";
      // Optional: Add haptic feedback or snap functionality here
    });

  const thumbStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: `${translateX.value}%` }],
    };
  });

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: `${translateX.value}%`,
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 bg-white">
        <View className="px-[6%] py-[8%]">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-[6%]">
            <Text className="text-base font-medium text-gray-700">Pricing</Text>
            <Text className="text-base font-semibold text-gray-900">
              ${price}
            </Text>
          </View>

          {/* Progress Bar Container */}
          <View
            className="relative"
            onLayout={(event) => {
              setSliderWidth(event.nativeEvent.layout.width);
            }}
          >
            {/* Background Track */}
            <View className="h-2 bg-gray-200 rounded-full">
              {/* Active Progress */}
              <Animated.View
                style={progressStyle}
                className="h-full bg-blue-500 rounded-full"
              />
            </View>

            {/* Thumb */}
            <GestureDetector gesture={gestureHandler}>
              <Animated.View
                style={[thumbStyle]}
                className="absolute top-[-6] w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-md"
              />
            </GestureDetector>
          </View>

          {/* Min/Max Labels */}
          <View className="flex-row justify-between mt-[4%]">
            <Text className="text-sm text-gray-500">${minPrice}</Text>
            <Text className="text-sm text-gray-500">${maxPrice}</Text>
          </View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

// Alternative version using onLayout for more accurate width calculation
export function PricingProgressBar() {
  const [price, setPrice] = useState(150);
  const [sliderWidth, setSliderWidth] = useState(0);
  const minPrice = 10;
  const maxPrice = 500;

  // Calculate initial position based on price
  const getPositionFromPrice = (price) => {
    return ((price - minPrice) / (maxPrice - minPrice)) * 100;
  };

  const translateX = useSharedValue(getPositionFromPrice(price));

  const updatePrice = (position) => {
    const newPrice = Math.round(
      minPrice + (position / 100) * (maxPrice - minPrice)
    );
    setPrice(newPrice);
  };

  const gestureHandler = Gesture.Pan()
    .onStart(() => {
      "worklet";
      // Store the initial position when gesture starts
    })
    .onUpdate((event) => {
      "worklet";
      if (sliderWidth > 0) {
        // Convert pixel movement to percentage based on actual slider width
        const percentageChange = (event.changeX / sliderWidth) * 100;
        const newPosition = clamp(translateX.value + percentageChange, 0, 100);
        translateX.value = newPosition;
        runOnJS(updatePrice)(newPosition);
      }
    })
    .onEnd(() => {
      "worklet";
      // Optional: Add haptic feedback or snap functionality here
    });

  const thumbStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: `${translateX.value}%` }],
    };
  });

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: `${translateX.value}%`,
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 bg-white">
        <View className="px-[6%] py-[8%]">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-[6%]">
            <Text className="text-base font-medium text-gray-700">Pricing</Text>
            <Text className="text-base font-semibold text-gray-900">
              ${price}
            </Text>
          </View>

          {/* Progress Bar Container */}
          <View
            className="relative"
            onLayout={(event) => {
              setSliderWidth(event.nativeEvent.layout.width);
            }}
          >
            {/* Background Track */}
            <View className="h-2 bg-gray-200 rounded-full">
              {/* Active Progress */}
              <Animated.View
                style={progressStyle}
                className="h-full bg-blue-500 rounded-full"
              />
            </View>

            {/* Thumb */}
            <GestureDetector gesture={gestureHandler}>
              <Animated.View
                style={[thumbStyle]}
                className="absolute top-[-6] w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-md"
              />
            </GestureDetector>
          </View>

          {/* Min/Max Labels */}
          <View className="flex-row justify-between mt-[4%]">
            <Text className="text-sm text-gray-500">${minPrice}</Text>
            <Text className="text-sm text-gray-500">${maxPrice}</Text>
          </View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
