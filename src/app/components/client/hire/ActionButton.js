import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
export default function ActionButton({ title, route }) {
  const navigation = useNavigation();
  const routes = useRoute();
  const providerData = routes.params.serviceData;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route, { providerData })}
      className="border px-[3%] py-[3%] rounded-md bg-[#F9F9F9] border-[#1F2937]"
    >
      <Text className="font-poppins-bold text-center text-base text-[#1F2937]">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
