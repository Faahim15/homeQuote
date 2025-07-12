import { View } from "react-native";
import CustomTitle from "../../../../components/client/PDetails/CustomTitle";
import LocationPicker from "../../../../components/shared/LocationPicker";
import BookingCalendar from "../../../../components/shared/BookingCalender";

export default function BookProviderScreen() {
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <View className="flex-1 px-[6%]">
        <CustomTitle title="Book Jackson" />
        <LocationPicker />
        <BookingCalendar />
      </View>
    </View>
  );
}
