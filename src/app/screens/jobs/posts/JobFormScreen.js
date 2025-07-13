import { Text, View, FlatList } from "react-native";
import CustomTitle from "../../../components/client/PDetails/CustomTitle";
import TextField from "../../../components/client/jobs/TextField";
import ServiceSearch from "../../../components/client/jobs/ServiceSearch";
import LocationPicker from "../../../components/shared/LocationPicker";
import TimePicker from "../../../components/shared/TimePicker";
import ButtonGroup from "../../../components/shared/ButtonGroup";
import PricingProgressBar from "../../../components/shared/PricingProgressBar";

export default function JobFormScreen() {
  return (
    <View className="flex-1 bg-[#f9f9f9]">
      <FlatList
        data={[]} // dummy data, just to use FlatList as scroll container
        keyExtractor={(item, index) => index.toString()}
        renderItem={null}
        ListHeaderComponent={
          <View>
            <View className="px-[6%]">
              <CustomTitle title="Post a Job" />
            </View>
            <View className="px-[6%] mt-[3%]">
              <TextField />
            </View>
            <ServiceSearch />
            <View className="px-[6%]">
              <LocationPicker />
            </View>
            <View className="px-[6%]">
              <TimePicker />
            </View>
            <View className="px-[6%]">
              <ButtonGroup />
            </View>
            {/* <PricingProgressBar /> */}
          </View>
        }
      />
    </View>
  );
}
