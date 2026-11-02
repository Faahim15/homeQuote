import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import { electricianData } from "../../../constants/data/provider/ServiceProviderData";
import {
  scale,
  verticalScale,
} from "../../../components/adaptive/Adaptiveness";
import { FlatList } from "react-native-gesture-handler";
import CustomHeader from "../../../components/client/CustomHeader";

const cardWidth = width * 0.45;

const ServiceCard = ({ item }) => {
  // Now you can add console.log or other statements
  console.log("ServiceCard item:", item);

  return (
    <View
      className="bg-white border border-[#D4E0EB] flex-1 justify-center items-center rounded-lg mr-3"
      style={{ width: scale(149), height: verticalScale(210) }}
    >
      <Image
        source={item.image}
        resizeMode="contain"
        className=""
        style={{
          width: scale(72),
          height: verticalScale(110),
          paddingBottom: verticalScale(0),
        }}
      />
      <View className="flex-1 pb-[10%] justify-end">
        <Text className="font-poppins-semiBold text-base text-[#565656]">
          {item.name}
        </Text>
        <Text className="font-poppins-500medium text-xs text-[#565656] mb-[1%]">
          {item.occupation}
        </Text>

        <View className="flex-row items-center">
          <Ionicons name="star" size={14} color="#F59E0B" />
          <Text className="ml-1 font-poppins-500medium text-xs text-[#F59E0B]">
            {item.rating}
          </Text>
          <Text className="ml-auto font-poppins-400regular text-base text-[#18649F]">
            {item.price}
          </Text>
        </View>

        <TouchableOpacity
          style={{ width: scale(124), height: verticalScale(25) }}
          className="bg-[#0054A5] border border-[#0054A5] mt-[3%] rounded-md py-[3%] px-[3%]"
        >
          <Text className="font-poppins-500medium text-[10px] text-center text-white font-semibold">
            Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function ElectricianProviderScreen() {
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <CustomHeader title="Electrician Provider" />
      <View className="flex-1 mt-[2.5%] mx-[6.4%] mb-2 ">
        <FlatList
          data={electricianData}
          renderItem={ServiceCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
          // contentContainerStyle={styles.flatListContainer}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          ItemSeparatorComponent={() => (
            <View style={{ height: verticalScale(16) }} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
