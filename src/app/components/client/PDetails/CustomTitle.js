import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function CustomTitle({ title }) {
  const navigation = useNavigation();
  return (
    <View className="flex-row  items-center  py-[2%] bg-[#F9F9F9] w-full  gap-[3%]">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text className="font-poppins-semiBold text-xl ">{title}</Text>
    </View>
  );
}
