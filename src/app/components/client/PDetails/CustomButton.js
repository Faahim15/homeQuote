import { View, Text, TouchableOpacity } from "react-native";

export default function CustomButton({ title, selected, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} disabled={selected}>
      <View
        className={`border mt-[2%] bg-[#F9F9F9] rounded-full py-[2%] px-[3%] ${
          selected ? "border-[#2C3E50]" : "border-[#AAB7B8]"
        }`}
      >
        <Text
          className={`font-poppins-400regular px-[3%] text-base ${
            selected ? "text-black font-bold" : "text-[#80898A]"
          }`}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
