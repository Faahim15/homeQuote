import { View, Text } from "react-native";
import React from "react";

export default function VerificationCodeField() {
  const numbers = [8, 2, 8, 4];
  return (
    <View className=" pt-[15%] justify-center items-center px-[5%]">
      <View className="flex-row justify-between w-full max-w-sm">
        {numbers.map((number, index) => (
          <View
            key={index}
            className="bg-gray-100 rounded-2xl w-[20%] aspect-square justify-center items-center mx-[2%] shadow-sm"
          >
            <Text className="text-2xl font-semibold text-black">{number}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
