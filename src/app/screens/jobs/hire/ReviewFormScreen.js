import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
import CustomTitle from "../../../components/client/PDetails/CustomTitle";

export default function ReviewFormScreen() {
  const route = useRoute();
  const providerData = route.params.providerData;
  const { providerName } = providerData;
  return (
    <View className="bg-[#f9f9f9]">
      <View className="px-[6%]">
        <CustomTitle title="Review" />
      </View>
    </View>
  );
}
