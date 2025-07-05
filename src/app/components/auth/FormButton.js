import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function FormButton({ title, route }) {
  const navigation = useNavigation();
  return (
    <View className=" flex-1 justify-end pb-[20%]">
      <TouchableOpacity
        onPress={() => navigation.navigate(route)}
        className=" bg-[#0054A5] mx-[6%] rounded-lg py-[4%]"
      >
        <Text className="text-white text-center text-base font-poppins-semiBold ">
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
