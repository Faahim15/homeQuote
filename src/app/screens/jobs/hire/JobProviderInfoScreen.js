import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import CustomTitle from "../../../components/client/PDetails/CustomTitle";
import ProviderInfo from "../../../components/client/hire/ProviderInfo";
export default function JobProviderInfoScreen() {
  const route = useRoute();
  const { serviceData } = route.params;
  return (
    <View className="px-[6%] bg-[#F9F9F9]">
      <View>
        <CustomTitle title={serviceData.serviceType} />
        <ProviderInfo serviceData={serviceData} />
      </View>
    </View>
  );
}
