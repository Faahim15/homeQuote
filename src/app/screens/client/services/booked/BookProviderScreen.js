import { View, Text, TextInput } from "react-native";
import CustomTitle from "../../../../components/client/PDetails/CustomTitle";
import LocationPicker from "../../../../components/shared/LocationPicker";
import { default as ClientCustomButton } from "../../../../components/client/CustomButton";
import TimePicker from "../../../../components/shared/TimePicker";
import ButtonGroup from "../../../../components/shared/ButtonGroup";
import InstructionField from "../../../../components/shared/InstructionField";
export default function BookProviderScreen() {
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <View className="flex-1 px-[6%] bg-[#F9F9F9] ">
        <CustomTitle title="Book Jackson" />
        <View className="mt-[4%]">
          <LocationPicker />
        </View>

        {/* Time Picker Section */}
        <TimePicker />
        {/* Button Selection */}
        <ButtonGroup />

        <InstructionField />

        {/* continue button */}
        <View className="">
          <ClientCustomButton route="BookingDetailsScreen" title="Continue" />
        </View>
      </View>
    </View>
  );
}
