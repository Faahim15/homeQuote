import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
export default function TimePicker() {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between mt-[6%]">
      <Text className="font-poppins-400regular text-base text-[#0F161C] mb-2">
        Time
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("BookingCalender")}
        className="flex-row items-center gap-[3%] "
      >
        <Ionicons name="time-outline" color="#319FCA" size={20} />
        <Text className="font-poppins-bold text-base text-[#319FCA] underline">
          Pick a time
        </Text>
      </TouchableOpacity>
    </View>
  );
}
