import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../adaptive/Adaptiveness";
import { XStyle } from "../../constants/ReusableFunction";

export default function PromoCard() {
  return (
    <View className="mx-[6.4%]  w-[87%]  mt-[3%] ">
      {/* Main Promo Card with Gradient Background */}
      <LinearGradient
        colors={["#319FCA", "#18649F"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="rounded-md overflow-hidden relative"
      >
        <View className="flex-row overflow-visible ">
          {/* Left Content */}
          <View className="flex-1 px-[6%] overflow-visible py-6 justify-center">
            <Text className="text-white font-poppins-bold text-2xl  mb-[0.5%]">
              Get 30% off
            </Text>
            <Text className="text-white text-sm  font-poppins-500medium">
              Just by Booking Home{"\n"}Services
            </Text>
          </View>

          {/* Right Image */}
          <View
            style={{
              width: scale(120),
              height: verticalScale(120),
              position: "absolute",
              right: scale(20),
              top: verticalScale(-10),
            }}
          >
            <Image
              source={require("../../../../assets/images/home/cover.png")}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Search Bar */}
        <View className=" ">
          <View
            style={[XStyle.lightShadow]}
            className="bg-white  flex-row rounded-md items-center px-[3%] py-[3%]"
          >
            <Ionicons name="search" size={24} color="#6B7280" />
            <TextInput
              placeholder="Search here..."
              placeholderTextColor="#898989"
              className="flex-1 ml-[2%]  font-poppins-400regular"
              color="#000"
            />
            <Ionicons name="options-outline" size={24} color="#6B7280" />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
