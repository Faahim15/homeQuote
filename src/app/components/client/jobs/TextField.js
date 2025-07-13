import { Text, TextInput, View } from "react-native";
import { XStyle } from "./../../../constants/ReusableFunction";

export default function TextField() {
  return (
    <View>
      <Text className="font-poppins-400regular text-base text-[#1F2937] ">
        Title of the Job
      </Text>

      <View
        style={XStyle.lightShadow}
        className="px-[4%] mt-[3%] py-[3%] bg-white border border-[#D4E0EB] rounded-lg "
      >
        <TextInput
          placeholder="What's the title of the workshop?"
          placeholderTextColor="#6B7280"
          className="font-poppins-400regular items-center justify-center bg-white  text-sm text-black"
        />
      </View>
    </View>
  );
}
