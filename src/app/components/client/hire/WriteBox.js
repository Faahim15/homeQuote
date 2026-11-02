import { View, Text, TextInput } from "react-native";
import { scale } from "../../adaptive/Adaptiveness";

export default function WriteBox() {
  return (
    <View className="w-[90%] mx-[5%] mt-[5%]">
      <Text className="text-sm font-poppins-500medium text-[#5C5F62] mb-[2%]">
        Write in bellow box
      </Text>
      <TextInput
        multiline
        placeholder="Write here..."
        placeholderTextColor="#898989"
        className="bg-[#f9f9f9] border border-gray-300 rounded-md px-[4%] py-[4%] text-black text-sm"
        style={{ minHeight: scale(100) }}
      />
    </View>
  );
}
