import { View, Text, TextInput } from "react-native";
export default function InstructionField() {
  return (
    <View className=" mt-[6%]">
      <Text className="font-poppins-500medium text-base text-[#5C5F62]">
        Provide Specific Instructions or Details
      </Text>

      <TextInput
        className="text-black bg-white border  rounded-md border-[#CACACA] py-[20%] px-[2%] mt-[2%] "
        placeholder="Write here.."
        placeholderTextColor="#898989"
        multiline
        textAlignVertical="top"
      />
    </View>
  );
}
