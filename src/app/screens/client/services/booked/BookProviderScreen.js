import { TouchableOpacity, View, Text } from "react-native";
import CustomTitle from "../../../../components/client/PDetails/CustomTitle";
import LocationPicker from "../../../../components/shared/LocationPicker";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../../../../components/client/PDetails/CustomButton";
import { useState } from "react";
export default function BookProviderScreen() {
  const [activeIndex, setActiveIndex] = useState(null);
  const titles = ["Urgent (today)", "Asap (within a week)", "Next Week"];
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <View className="flex-1 px-[6%]">
        <CustomTitle title="Book Jackson" />
        <LocationPicker />

        {/* Time Picker Section */}
        <View className="flex-row justify-between mt-[3%]">
          <Text className="font-poppins-400regular text-base text-[#0F161C] mb-2">
            Time
          </Text>

          <TouchableOpacity className="flex-row items-center gap-[3%] ">
            <Ionicons name="time-outline" color="#319FCA" size={20} />
            <Text className="font-poppins-bold text-base text-[#319FCA] underline">
              Pick a time
            </Text>
          </TouchableOpacity>
        </View>
        {/* Button Selection */}
        {titles.map((title, index) => (
          <CustomButton
            key={index}
            title={title}
            selected={activeIndex === index}
            onPress={() => setActiveIndex(index)}
          />
        ))}
      </View>
    </View>
  );
}
