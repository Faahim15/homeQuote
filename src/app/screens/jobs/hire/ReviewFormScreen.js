import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
import CustomTitle from "../../../components/client/PDetails/CustomTitle";
import RatingDropdown from "../../../components/client/hire/RatingDropdown";
import WriteBox from "../../../components/client/hire/WriteBox";
import CustomButton from "../../../components/client/CustomButton";
export default function ReviewFormScreen() {
  const route = useRoute();
  const providerData = route.params.providerData;
  const { providerName } = providerData;
  return (
    <View className="flex-1 bg-[#f9f9f9]">
      <View className="px-[5%]">
        <CustomTitle title="Review" />
      </View>
      <View className="mt-[3%] px-[5%]">
        <Text className="font-poppins-500medium text-base text-[#5C5F62]">
          How was your experience with {providerName}?
        </Text>
      </View>
      <View>
        <RatingDropdown />
      </View>

      <View>
        <WriteBox />
      </View>

      <View className="flex-1 justify-end pb-[15%] px-[5%]">
        <CustomButton title="Done" route="BottomTabs" />
      </View>
    </View>
  );
}
