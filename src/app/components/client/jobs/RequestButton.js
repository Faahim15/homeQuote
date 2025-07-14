import { View, Text } from "react-native";
import CustomButton from "../PDetails/CustomButton";
export default function RequestButton() {
  return (
    <View className="">
      <Text className="font-poppins-400regular text-base text-center text-[#80898A]">
        Or
      </Text>
      <View className="px-[6%] mt-[3%] ">
        <CustomButton title="Req a personalized Quote" selected={false} />
      </View>
    </View>
  );
}
