import { useRoute } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import CustomTitle from "../../../components/client/PDetails/CustomTitle";
import ProviderInfo from "../../../components/client/hire/ProviderInfo";
import ActionButton from "../../../components/client/hire/ActionButton";
export default function JobProviderInfoScreen() {
  const route = useRoute();
  const { serviceData } = route.params;
  return (
    <View className="flex-1 mb-[2%]  px-[6%] bg-[#F9F9F9]">
      <View>
        <CustomTitle title={serviceData.serviceType} />
        <ProviderInfo serviceData={serviceData} />
      </View>
      <View className="mt-[8%] ">
        <ActionButton route="ReviewFormScreen" title="Complete Job" />
      </View>
    </View>
  );
}
