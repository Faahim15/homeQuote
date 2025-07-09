import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
export default function CustomButton({ title }) {
  return (
    <View className="mx-[6%] mt-[3%] bg-[#175994] border rounded-md border-[#0054A5] px-[3%] py-[3%] ">
      <TouchableOpacity>
        <Text className="text-white font-poppins-bold text-center">
          {" "}
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
