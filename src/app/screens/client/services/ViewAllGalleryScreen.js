import CustomTitle from "../../../components/client/PDetails/CustomTitle";
import ViewAllGallery from "../../../components/client/PDetails/ViewAllGallery";
import { View, Text, TouchableOpacity } from "react-native";
export default function ViewAllGalleryScreen() {
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <View className="flex-1 mx-[6%]">
        {/* <View className="flex-row bg-[#F9F9F9] w-full h-[3%]  gap-[3%]">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text className="font-poppins-semiBold text-xl ">Gallery</Text>
        </View> */}
        <CustomTitle title="Gallery" />
        <View className="mt-[3%]">
          <ViewAllGallery />
        </View>
      </View>
    </View>
  );
}
