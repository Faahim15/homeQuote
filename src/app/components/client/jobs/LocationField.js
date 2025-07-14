import { View, Text, TextInput } from "react-native";
export default function LocationField({ label, keyboardType, placeholder }) {
  return (
    <View className="mt-[1.5%]">
      <Text className="font-poppins-400regular text-base text-[#5C5F62] ">
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor="#898989"
        className=" font-poppins-400regular px-[4%] py-[4%] mt-[1%] bg-white text-black border border-[#CACACA] rounded "
      />
    </View>
  );
}
