import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { scale } from "../../adaptive/Adaptiveness";
import { Ionicons } from "@expo/vector-icons";
import Services from "./Services";
const ServiceCard = () => {
  const [activeTab, setActiveTab] = useState("Quotes");

  const tabs = ["Quotes", "Progress", "Unpaid"];

  return (
    <View className="w-full px-[3%] bg-[#f9f9f9] rounded-lg shadow-lg overflow-hidden">
      {/* Tab Navigation */}
      <View className="flex-row border-b border-[#C8C8C8] bg-[#f9f9f9]">
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab}
            className={`flex-1 py-3 px-4 ${
              activeTab === tab ? "bg-white border-b border-[#175994]" : ""
            }`}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              className={`text-center text-base font-poppins-400regular ${
                activeTab === tab ? "text-[#175994]" : "text-[#6B7280]"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Service Provider Info */}
      <Services />
    </View>
  );
};

export default ServiceCard;
