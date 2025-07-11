import { View } from "react-native";
import CustomTitle from "../../../../components/client/PDetails/CustomTitle";

export default function BookProviderScreen() {
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <View className="px-[6%]">
        <CustomTitle title="Book Jackson" />
      </View>
    </View>
  );
}
