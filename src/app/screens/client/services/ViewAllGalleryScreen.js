import CustomHeader from "../../../components/client/CustomHeader";
import ViewAllGallery from "../../../components/client/PDetails/ViewAllGallery";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function ViewAllGalleryScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <View className="flex-1 mx-[6%]">
        <View className="flex-row bg-[#F9F9F9] w-full h-[3%]  gap-[3%]">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text className="font-poppins-semiBold text-xl ">Gallery</Text>
        </View>
        <View className="mt-[3%]">
          <ViewAllGallery />
        </View>
      </View>
    </View>
  );
}
