import { Text, View } from "react-native";
import CustomTitle from "../../../components/client/PDetails/CustomTitle";
import { scale } from "../../../components/adaptive/Adaptiveness";
import JobSummary from "../../../components/client/jobs/JobSummary";
import CustomButton from "../../../components/client/CustomButton";
export default function JobSummaryScreen() {
  return (
    <View className="flex-1 px-[6%] bg-[#F9F9F9]">
      <View>
        <CustomTitle title="Post a Job" />
      </View>
      <View>
        <Text className="font-poppins-500medium text-base ">
          Review Summary
        </Text>
        <JobSummary />
      </View>
      <View>
        <CustomButton title="Post your job" route="BottomTabs" />
      </View>
    </View>
  );
}
