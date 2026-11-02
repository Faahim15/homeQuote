import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function ShortMessage({ title, btnText, route }) {
  const navigation = useNavigation();
  return (
    <View className="flex-row gap-[1%] mt-[8%] justify-center">
      <Text className="font-poppins-400regular text-sm text-black">
        {title}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate(route)}>
        <Text className="font-poppins-semiBold underline text-sm text-[#0054A5] ">
          {btnText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
