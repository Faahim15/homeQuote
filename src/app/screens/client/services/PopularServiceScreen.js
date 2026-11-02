import { View, ScrollView } from "react-native";
import CustomHeader from "../../../components/client/CustomHeader";
import TopServices from "../../../components/client/TopServices";

export default function PopularServiceScreen() {
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <CustomHeader />
      <ScrollView className="flex-1 ">
        <TopServices />
      </ScrollView>
    </View>
  );
}
