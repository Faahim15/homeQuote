import { View, Text, TextInput } from "react-native";
import CustomTitle from "../../../../components/client/PDetails/CustomTitle";
import LocationPicker from "../../../../components/shared/LocationPicker";
import { default as ClientCustomButton } from "../../../../components/client/CustomButton";
import TimePicker from "../../../../components/shared/TimePicker";
import ButtonGroup from "../../../../components/shared/ButtonGroup";
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

        <View className="mt-[6%]">
          <Text className="font-poppins-500medium text-base text-[#5C5F62]">
            Provide Specific Instructions or Details
          </Text>

          <TextInput
            className="text-black bg-white border h-[40%] rounded-md border-[#CACACA] py-[2%] px-[2%] mt-[2%] "
            placeholder="Write here.."
            placeholderTextColor="#898989"
            multiline
            textAlignVertical="top"
          />
        </View>

        {/* continue button */}
        <View className="">
          <ClientCustomButton route="BookingDetailsScreen" title="Continue" />
        </View>
      </View>
    </View>
  );
}
