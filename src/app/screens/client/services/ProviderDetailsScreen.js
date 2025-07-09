import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  scale,
  verticalScale,
} from "../../../components/adaptive/Adaptiveness";
import ArrowBack from "../../../components/auth/ArrowBack";
import { XStyle } from "../../../constants/ReusableFunction";
import CustomButton from "../../../components/client/CustomButton";

export default function ProviderDetailsScreen() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        <LinearGradient
          colors={["#319FCA", "#18649F"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="rounded-md overflow-hidden relative"
          style={{
            height: verticalScale(344),
            borderBottomLeftRadius: scale(16),
            borderBottomRightRadius: scale(16),
          }}
        >
          <View className="w-10 h-10 mx-[6%] mt-[6%] rounded-[20px] bg-white ">
            <ArrowBack />
          </View>
          <View className="flex-1 ">
            <Image
              source={require("../../../../../assets/images/home/electrician/electrician3.png")}
              style={{
                width: scale(264),
                height: verticalScale(290),
                marginTop: verticalScale(0),
                marginLeft: scale(30),
              }}
            />
          </View>
        </LinearGradient>
        <View className="flex-row mt-[3%] mx-[6%] justify-between">
          <View>
            <Text className="font-poppins-semiBold text-2xl text-[#565656]">
              Jackson
            </Text>
            <Text className="font-poppins-500medium text-base text-[#565656]">
              Electrician
            </Text>
          </View>
          <View className="flex-row ">
            <Image
              style={{
                height: verticalScale(44),
                width: scale(44),
                marginRight: scale(24),
              }}
              source={require("../../../../../assets/images/home/booked/call.png")}
            />
            <Image
              style={{ height: verticalScale(44), width: scale(44) }}
              source={require("../../../../../assets/images/home/booked/chatlogo.png")}
            />
          </View>
        </View>
        <View className="flex-row mt-[3%] mx-[6%] justify-between">
          <Text className="font-poppins-semiBold text-base text-[#6B7280]">
            Booking Hours
          </Text>
          <Text className="font-poppins-400regular text-base text-[#565656]">
            $20/hr
          </Text>
        </View>

        <View
          style={[
            XStyle.lightShadow,
            { height: verticalScale(93), width: scale(327) },
          ]}
          className="flex-row justify-center items-center border rounded-lg border-[#D4E0EB] gap-[20%] bg-[#FFFFFF] mt-[3%] mx-[6%] "
        >
          <View>
            <Image
              source={require("../../../../../assets/images/home/booked/completed.png")}
            />
            <Text className="font-poppins-500medium text-base text-[#565656]">
              4.8
            </Text>
            <Text className="font-poppins-500medium text-[10px] text-[#565656]">
              Rating
            </Text>
          </View>
          <View>
            <Image
              source={require("../../../../../assets/images/home/booked/expericence.png")}
            />
            <Text className="font-poppins-500medium text-base text-[#565656]">
              56 Orders
            </Text>
            <Text className="font-poppins-500medium text-[10px] text-[#565656]">
              completed
            </Text>
          </View>
          <View>
            <Image
              source={require("../../../../../assets/images/home/booked/expericence.png")}
            />
            <Text className="font-poppins-500medium text-base text-[#565656]">
              4 Years
            </Text>
            <Text className="font-poppins-500medium text-[10px] text-[#565656]">
              Experience
            </Text>
          </View>
        </View>
        <View className="mx-[6%] mt-[3%] ">
          <Text className="font-poppins-semiBold text-base text-[#565656]">
            Skills
          </Text>
        </View>
        {/* Book button */}
        <CustomButton title="Book" />

        <View className="flex-row justify-evenly mx-[6%] mt-[3%] ">
          <View
            style={[
              XStyle.lightShadow,
              { width: scale(60), height: verticalScale(30) },
            ]}
            className="bg-white justify-center border border-[#D4E0EB] items-center"
          >
            <Text className="font-poppins-500medium text-xs text-center text-[#565656] ">
              7:00 AM
            </Text>
          </View>
          <View>
            <Text className="font-poppins-semiBold pt-[2%] text-base text-[#919191] ">
              To
            </Text>
          </View>
          <View
            style={[
              XStyle.lightShadow,
              { width: scale(60), height: verticalScale(30) },
            ]}
            className="bg-white justify-center border border-[#D4E0EB] items-center"
          >
            <Text className="font-poppins-500medium text-xs text-center text-[#565656] ">
              7:00 AM
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
