import { View, Text, Image, ScrollView } from "react-native";
import { Platform, StyleSheet } from "react-native";
import { scale, verticalScale } from "../../components/adaptive/Adaptiveness";
import JobsPost from "../../components/initial/JobsPost";
export default function OnboardingHomeScreen() {
  return (
    <ScrollView className="flex-1 bg-[#F9FAFB]">
      {/* Header section */}
      <View className="justify-center mx-[6%] mt-[1%] ">
        <View className="flex-row justify-between ">
          <Text className="font-poppins-bold text-base">Welcome to Quoto!</Text>
          <Image
            source={require("../../../../assets/images/home/notificationIcon.png")}
            resizeMode="cover"
          />
        </View>
        <Text className="text-[#4D4D4D] font-poppins-400regular text-justify w-[80%] text-xs ">
          Connecting homeowners with trusted local pros - fast, simple, and
          reliable
        </Text>
        <View className="flex-row gap-[1%] mt-[2%]">
          <Image
            source={require("../../../../assets/images/home/bytesize_location.png")}
            resizeMode="cover"
            className="mt-[0.5%]"
          />
          <Text className="font-poppins-400regular text-xs text-[#8891AA] ">
            38 Chestnut StreetStaunton
          </Text>
        </View>
      </View>
      <Text className="font-poppins-semiBold text-base text-[#6B7280] mt-[6%] mx-[6%] ">
        Today's Jobs
      </Text>
      <JobsPost />
      <Text className="font-poppins-semiBold text-base text-[#6B7280] mt-[6%] mx-[6%] ">
        Active Jobs
      </Text>
      <JobsPost />
    </ScrollView>
  );
}
