import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { verticalScale } from "../adaptive/Adaptiveness";
import { useState } from "react";

export default function PasswordField({
  label = "Password",
  placeholder = "password",
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="mb-[4%]">
      <Text className="font-poppins-400regular text-base text-[#000] mb-[2%]">
        {label}
      </Text>
      <View className="flex-row items-centerbg-[#FFF] border border-[#DCDCDC] rounded-md px-[4%] py-[3%]">
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#9CA3AF"
          style={{ paddingTop: verticalScale(12) }}
        />
        <TextInput
          className="flex-1 font-poppins-400regular ml-[3%] text-sm  bg-[#fff] text-black "
          placeholder={placeholder}
          placeholderTextColor="#000"
          secureTextEntry={!showPassword}
          //   value={formData.password}
          //   onChangeText={(text) => handleInputChange("password", text)}
          style={{ color: "#000", paddingTop: verticalScale(16) }}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          className="ml-[2%]"
        >
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={20}
            color="#9CA3AF"
            style={{ paddingTop: verticalScale(15) }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
