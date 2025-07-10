import { View, Image, Text } from "react-native";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";
import StarRating from "./StarRating";

export default function Reviews({ rating }) {
  return (
    <View className="mb-[2%]">
      <View className="flex-row mt-[3%] justify-between">
        <View className="flex-row gap-[3%] ">
          <Image
            style={{
              height: verticalScale(24),
              width: scale(24),
              borderRadius: scale(2),
            }}
            source={require("../../../../../assets/images/home/Avatar.png")}
          />
          <Text className="font-poppins-semiBold pt-[1%] text-sm text-[#565656]">
            {" "}
            Josh Peter{" "}
          </Text>
        </View>
        <View className="mt-[1.5%]">
          <Text className="font-poppins-500medium text-xs text-[#565656] ">
            12/12/2024
          </Text>
        </View>
      </View>
      <View className="mt-[2%]">
        <StarRating rating={rating} />
      </View>
      <View className="mt-[2%]">
        <Text className="font-poppins-500medium text-justify text-xs text-[#565656]">
          Jackson Electrics was fantastic! Fast response, professional work, and
          everything was done safely and efficiently. Highly recommend.
        </Text>
      </View>
    </View>
  );
}
