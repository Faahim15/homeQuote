import { View, Text, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";
import { useState } from "react";

export default function Specializations() {
  const titles = [
    "Residential",
    "Commercial",
    "HVAC",
    "Lighting",
    "Repair",
    "Home Installations",
  ];
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const toggleSelection = (index) => {
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes((prev) => prev.filter((i) => i !== index));
    } else {
      setSelectedIndexes((prev) => [...prev, index]);
    }
  };
  return (
    <View className="mt-[4%]">
      <Text className="font-poppins-semiBold text-base text-[#6B7280] ">
        Specializations
      </Text>
      <View className="flex-row flex-wrap gap-[3%] mt-[3%] ">
        {titles.map((title, idx) => {
          const isSelected = selectedIndexes.includes(idx);
          return (
            <TouchableOpacity
              onPress={() => toggleSelection(idx)}
              style={{
                height: verticalScale(35),
                marginBottom: verticalScale(4),
              }}
              className={` border rounded-md border-[#D4E0EB] px-[3%] py-[3%] items-center justify-center ${isSelected ? "bg-[#319FCA] " : "bg-white"} `}
              key={idx}
            >
              <Text
                className={`font-poppins-500medium text-xs  ${isSelected ? "text-white" : "text-[#175994]"} `}
              >
                {title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
