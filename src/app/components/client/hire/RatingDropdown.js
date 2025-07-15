import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StarRating from "../PDetails/StarRating";
import Ratings from "./Ratings";

const ratingOptions = ["1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"];

export default function CustomRatingDropdown() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (value) => {
    setSelectedRating(value);
    setShowDropdown(false);
  };

  return (
    <View className="w-[90%] mx-[5%] mt-[5%] relative">
      <Text className="text-base text-gray-700 font-medium mb-[2%]">
        Select Rating
      </Text>

      {/* Dropdown Trigger */}
      <TouchableOpacity
        onPress={() => setShowDropdown(!showDropdown)}
        className="w-full bg-[#f9f9f9] border border-gray-300 rounded-md px-[4%] py-[3%] flex-row justify-between items-center"
      >
        <Text className="text-gray-700">
          {selectedRating ? selectedRating : "Choose rating"}
        </Text>
        <Ionicons
          name={showDropdown ? "chevron-up" : "chevron-down"}
          size={20}
          color="#555"
        />
      </TouchableOpacity>

      {/* Dropdown List */}
      {showDropdown && (
        <View className="absolute w-full bg-[#f9f9f9] border border-gray-300 rounded-md mt-[2%] z-10 top-[100%] left-0">
          {ratingOptions.map((rating, index) => (
            <Pressable
              key={index}
              className="px-[4%] py-[2%] w-full"
              onPress={() => handleSelect(rating)}
            >
              <Text className="text-gray-700">{rating}</Text>
            </Pressable>
          ))}
        </View>
      )}
      {selectedRating && <Ratings rating={selectedRating} />}
    </View>
  );
}
