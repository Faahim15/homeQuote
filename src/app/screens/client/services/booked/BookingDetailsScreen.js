import { View, Text } from "react-native";
import CustomTitle from "../../../../components/client/PDetails/CustomTitle";

export default function BookingDetailsScreen() {
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <View className="px-[6%]">
        <CustomTitle title="Book Jackson" />
      </View>

      <View className="px-[6%]">
        <View className="mt-[3%] mb-[2%]">
          <Text className="font-poppins-500medium  text-base  text-[#5C5F62]">
            Review Summary
          </Text>
        </View>
      </View>
    </View>
  );
}
