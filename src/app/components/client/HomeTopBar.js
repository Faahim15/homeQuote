import { View, Text, Image } from "react-native";
import { scale, verticalScale } from "../adaptive/Adaptiveness";

export default function HomeTopBar() {
  return (
    <View className="flex-row mx-[6.4%] mt-[2%] gap-[2%]">
      <View>
        <Image
          style={{
            width: scale(32),
            height: verticalScale(32),
            borderRadius: scale(16),
          }}
          source={require("../../../../assets/images/home/DP.png")}
        />
      </View>
      <View className="flex-row w-[90%] justify-between ">
        <View>
          <Text className="font-poppins-bold text-base">Welcome to Quoto!</Text>
          <Text className="font-poppins-400regular text-xs text-[#4D4D4D]">
            Minnie
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
        <View>
          <Image
            source={require("../../../../assets/images/home/notificationIcon.png")}
            resizeMode="cover"
            style={{ width: scale(32), height: verticalScale(32) }}
          />
        </View>
      </View>
    </View>
  );
}
