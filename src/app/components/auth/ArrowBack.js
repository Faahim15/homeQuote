import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function ArrowBack() {
  const navigation = useNavigation();
  return (
    <View className="justify-center pt-[3%] px-[6%]">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="w-10 h-10 justify-center"
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
}
