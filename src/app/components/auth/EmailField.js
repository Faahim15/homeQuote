import { View, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { verticalScale } from "../adaptive/Adaptiveness";
export default function EmailField({ label }) {
  return (
    <View className="mb-[4%]">
      <Text className="font-poppins-400regular text-base text-[#000] mb-[2%]">
        {label}
      </Text>
      <View className="flex-row items-center bg-[#FFF] border border-[#DCDCDC] rounded-md px-[4%] py-[3%]">
        <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
        <TextInput
          className="flex-1 font-poppins-400regular ml-[3%] text-sm  bg-[#fff] text-black "
          placeholder="Email"
          placeholderTextColor="#000"
          //   value={formData.email}
          keyboardType="email-address"
          autoCapitalize="none"
          //   onChangeText={(text) => handleInputChange("email", text)}
          style={{ color: "#000", paddingTop: verticalScale(16) }}
        />
      </View>
    </View>
  );
}
