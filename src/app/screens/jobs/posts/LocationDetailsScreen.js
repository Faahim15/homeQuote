import { Text, View } from "react-native";
import CustomTitle from "../../../components/client/PDetails/CustomTitle";
import LocationDetails from "../../../components/client/jobs/LocationDetails";
import CustomButton from "../../../components/client/CustomButton";

export default function LocationDetailsScreen() {
  return (
    <View className="flex-1 pb-[50%] px-[6%] bg-[#F9F9F9]">
      <View className="">
        <CustomTitle title="Post a Job" />
      </View>
      <View className="">
        <LocationDetails />
      </View>
      <View className="flex-1 justify-end">
        <CustomButton title="Continue" route="JobSummaryScreen" />
      </View>
    </View>
  );
}
