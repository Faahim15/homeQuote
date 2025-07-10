import { View, Text, Image } from "react-native";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";
export default function Banner() {
  return (
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
  );
}
