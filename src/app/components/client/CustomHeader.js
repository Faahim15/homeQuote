import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function CustomHeader({ title = "Popular Services" }) {
  const navigation = useNavigation();
  return (
    <View className="flex-row bg-[#F9F9F9] w-full h-[3%] ml-[6%] gap-[3%]">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text className="font-poppins-semiBold text-xl ">{title}</Text>
    </View>
  );
}
