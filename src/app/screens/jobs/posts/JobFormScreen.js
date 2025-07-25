import { View, FlatList } from "react-native";
import CustomTitle from "../../../components/client/PDetails/CustomTitle";
import TextField from "../../../components/client/jobs/TextField";
import ServiceSearch from "../../../components/client/jobs/ServiceSearch";
import LocationPicker from "../../../components/shared/LocationPicker";
import TimePicker from "../../../components/shared/TimePicker";
import ButtonGroup from "../../../components/shared/ButtonGroup";
import PriceSlider from "../../../components/shared/PriceSlider";
import RequestButton from "../../../components/client/jobs/RequestButton";
import InstructionField from "../../../components/shared/InstructionField";
import Specializations from "../../../components/client/jobs/Specializations";
import { verticalScale } from "../../../components/adaptive/Adaptiveness";
import CustomButton from "../../../components/client/CustomButton";

export default function JobFormScreen() {
  return (
    <View className=" bg-[#f9f9f9]">
      <FlatList
        data={[]} // dummy data, just to use FlatList as scroll container
        keyExtractor={(item, index) => index.toString()}
        renderItem={null}
        contentContainerStyle={{ paddingBottom: verticalScale(70) }}
        ListHeaderComponent={
          <View className="pb-[0%]">
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
            <View>
              <PriceSlider />
              <RequestButton />
            </View>
            <View className="mt-[3%]  px-[6%] ">
              <InstructionField />
            </View>
            <View className="px-[6%]  ">
              <Specializations />
            </View>
            <View className="px-[6%]">
              <CustomButton title="Continue" route="LocationDetailsScreen" />
            </View>
          </View>
        }
      />
    </View>
  );
}
