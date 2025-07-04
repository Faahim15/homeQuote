import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../../components/adaptive/Adaptiveness";
import { useNavigation } from "@react-navigation/native";
export default function SignUpScreen() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    location: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false); 
  const navigation = useNavigation();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <SafeAreaView className="flex-1  bg-white">
      {/* <StatusBar barStyle="dark-content" backgroundColor="white" /> */}

      <ScrollView
        // style={{ paddingBottom: verticalScale(500) }}
        showsVerticalScrollIndicator={false} 
        className=' h-[75%] '
      >
        {/* Header Section - 15% of screen height */}
        <View className="justify-center px-[6%]">
          <TouchableOpacity onPress={()=>navigation.goBack()} className="w-10 h-10 justify-center">
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Welcome Section - 20% of screen height */}
        <View className="mt-[1.5%]  justify-center items-center ">
          <Text className="font-poppins-500medium text-2xl  text-[#292929] ">
            Welcome Here!
          </Text>
          <Text className=" font-poppins-500medium  text-2xl  text-[#319FCA] ">
            Create An Account.
          </Text>
          <Text className=" font-poppins-500medium  text-sm text-[#292929]">
            Fill In your Information.
          </Text>
        </View>

        {/* Form Section - 55% of screen height */}
        <View className="h-[55%] px-[6%] justify-between">
          {/* Full Name Input */}
          <View className="mb-[4%]">
            <Text className="font-poppins-400regular text-base text-[#000] mb-[2%]">
              Full name
            </Text>
            <View className="flex-row items-center bg-[#FFF] border border-[#DCDCDC] rounded-md px-[4%] py-[3%]">
              <Ionicons name="person-outline" size={20} color="#9E9E9E" />
              <TextInput
                className="flex-1 font-poppins-400regular ml-[3%] text-sm  bg-[#fff] text-black "
                placeholder="Full name"
                placeholderTextColor="#6B7280"
                value={formData.fullName}
                onChangeText={(text) => handleInputChange("fullName", text)}
                style={{ paddingTop: verticalScale(16) }}
              />
            </View>
          </View>

          <View className="mb-[4%]">
            <Text className="font-poppins-400regular text-base text-[#000] mb-[2%]">
              Email
            </Text>
            <View className="flex-row items-center bg-[#FFF] border border-[#DCDCDC] rounded-md px-[4%] py-[3%]">
              <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
              <TextInput
                className="flex-1 font-poppins-400regular ml-[3%] text-sm  bg-[#fff] text-black "
                placeholder="Email"
                placeholderTextColor="#6B7280"
                value={formData.email}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(text) => handleInputChange("email", text)}
                style={{ paddingTop: verticalScale(16) }}
              />
            </View>
          </View>

          <View className="mb-[4%]">
            <Text className="font-poppins-400regular text-base text-[#000] mb-[2%]">
              Location
            </Text>
            <View className="flex-row items-center bg-[#FFF] border border-[#DCDCDC] rounded-md px-[4%] py-[3%]">
              <Ionicons name="location-outline" size={20} color="#9CA3AF" />
              <TextInput
                className="flex-1 font-poppins-400regular ml-[3%] text-sm  bg-[#fff] text-black "
                placeholder="House Location"
                placeholderTextColor="#6B7280"
                value={formData.location}
                onChangeText={(text) => handleInputChange("location", text)}
                style={{ paddingTop: verticalScale(16) }}
              />
            </View>
          </View>

          {/* Password Input */}
          <View className="mb-[4%]">
            <Text className="font-poppins-400regular text-base text-[#000] mb-[2%]">
              Password
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
                placeholder="Password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showPassword}
                value={formData.password}
                onChangeText={(text) => handleInputChange("password", text)}
                style={{ paddingTop: verticalScale(16) }}
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

          {/* Confirm Password Input */}
          <View>
            <Text className="font-poppins-400regular text-base text-[#000] mb-[2%]">
              Confirm Password
            </Text>
            <View className="flex-row items-centerbg-[#FFF] border border-[#DCDCDC] rounded-md px-[4%] py-[3%]">
              <Ionicons
                style={{ marginTop: verticalScale(10) }}
                name="lock-closed-outline"
                size={20}
                color="#9CA3AF"
              />
              <TextInput
                className="flex-1 font-poppins-400regular ml-[3%] text-sm  bg-[#fff] text-black "
                placeholder="Confirm password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showConfirmPassword}
                value={formData.confirmPassword}
                onChangeText={(text) =>
                  handleInputChange("confirmPassword", text)
                }
                style={{ paddingTop: verticalScale(15) }}
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                className="ml-[2%]"
              >
                <Ionicons
                  name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color="#9CA3AF"
                  style={{ paddingTop: verticalScale(12) }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Terms and Conditions */}
      <View className="flex-row pl-[5.5%]  items-center  pb-[4%] ">
        <TouchableOpacity
          onPress={() => setAgreeToTerms(!agreeToTerms)}
          className="mr-[3%]"
        >
          <Ionicons
            name={agreeToTerms ? "checkbox" : "square-outline"}
            size={20}
            color={agreeToTerms ? "#909090" : "#9CA3AF"}
          />
        </TouchableOpacity>
        <Text className="text-sm font-poppins-400regular text-black">
          Agree with
          <Text className="text-[#909090] "> Terms and Conditions</Text>
        </Text>
      </View>
      {/* Bottom Section - 10% of screen height */}
      <View className="flex-1 px-[5%] justify-center">
        {/* Sign Up Button */}
        <TouchableOpacity
          className="bg-[#0054A5] rounded-lg py-[4%] mb-[4%]"
          disabled={!agreeToTerms}
          style={{ opacity: agreeToTerms ? 1 : 0.6 }}
        >
          <Text className="text-white text-center text-base font-poppins-semiBold ">
            Sign up
          </Text>
        </TouchableOpacity>

        {/* Sign In Link */}
        <View className="  flex-row gap-[0.5%] mb-[5%] justify-center">
          <Text className="font-poppins-400regular text-sm text-black">
            Already have an account?
          </Text>
          <TouchableOpacity>
            <Text className="font-poppins-semiBold text-sm text-[#0054A5] ">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
