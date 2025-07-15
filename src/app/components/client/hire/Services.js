import { View, Image, Text } from "react-native";
import { scale } from "../../adaptive/Adaptiveness";
import { Ionicons } from "@expo/vector-icons";
export default function Services() {
  return (
    <View>
      {/* Service Type Banner */}
      <View
        style={{
          borderTopLeftRadius: scale(8),
          borderTopRightRadius: scale(8),
        }}
        className="bg-[#319FCA] mt-[3%] px-[3.5%] py-[3%] flex-row items-center justify-between"
      >
        <Text className="text-white font-poppins-400regular text-base">
          TV repair and Installation
        </Text>
        <Ionicons name="arrow-forward" size={16} color="#fff" />
      </View>

      <View
        style={{
          borderBottomRightRadius: scale(8),
          borderBottomLeftRadius: scale(8),
        }}
        className="px-[4%] py-[4%] border border-[#DCDCDC] rounded-sm bg-white"
      >
        <View className="flex-row items-center gap-[4%] ">
          {/* Profile Image */}
          <View className="w-16 h-16 mb-[4%] rounded-full bg-blue-500 items-center justify-center">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
              }}
              className="w-full h-full rounded-full"
              resizeMode="cover"
            />
          </View>

          {/* Provider Details */}
          <View className="flex-1  ">
            <Text className="font-poppins-500medium text-xl  text-gray-800 mb-1">
              Jackson
            </Text>

            {/* Rating */}
            <View className="flex-row items-center mb-[2%]">
              <Text className="text-[#F59E0B] font-poppins-400regular text-xs mr-1">
                ★ 4.8
              </Text>

              <Text className="font-poppins-400regular text-[#18649F] text-xs">
                (8 Reviews)
              </Text>
            </View>

            {/* Price and Time */}

            <View className="flex-row justify-between">
              <Text className="font-poppins-400regular text-base text-[#1F2937]">
                Price
              </Text>
              <Text className="text-[#F59E0B] text-base font-poppins-semiBold ">
                $320
              </Text>
            </View>

            <View className="flex-row justify-end w-full">
              <Text className="text-gray-500 text-sm">14 m Ago</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
