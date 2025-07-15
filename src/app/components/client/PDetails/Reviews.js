import { View, Image, Text } from "react-native";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";
import StarRating from "./StarRating";
import ReviewText from "./ReviewText";

export default function Reviews({ rating }) {
  return (
    <View
      style={{ width: scale(250) }}
      className="border border-[#D8DCE0]  mr-[1%] rounded-lg bg-white px-[4%] py-[4%] mb-[2%]"
    >
      {/* <View className="mt-[2%]">
        <Text className="font-poppins-500medium text-justify text-xs text-[#565656]">
          Jackson Electrics was fantastic! Fast response, professional work, and
          everything was done safely and efficiently. Highly recommend.
        </Text>
      </View> */}
      <ReviewText text="Jackson Electrics was fantastic! Fast response, professional work, and everything was done safely and efficiently. Highly recommend. I will definitely book them again for any electrical issues around the house. Great experience overall!" />

      <View className="flex-col mt-[3%]  ">
        <View className="flex-row gap-[4%] ">
          <View className="mt-[2.5%]">
            <Image
              style={{
                height: verticalScale(24),
                width: scale(24),
                borderRadius: scale(12),
              }}
              source={require("../../../../../assets/images/home/Avatar.png")}
            />
          </View>
          <View className="gap-[4%]">
            <Text className="font-poppins-semiBold pt-[1%] text-sm text-[#565656]">
              Josh Peter{" "}
            </Text>

            <Text className="font-poppins-500medium text-xs text-[#565656] ">
              12/12/2024
            </Text>
          </View>
        </View>
      </View>
      {/* <View className="mt-[2%]">
        <StarRating rating={rating} />
      </View> */}
    </View>
  );
}
