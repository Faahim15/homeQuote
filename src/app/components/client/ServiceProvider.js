import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../adaptive/Adaptiveness";
const { width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

const cardWidth = width * 0.45;

const data = [
  {
    id: "1",
    name: "Jackson",
    occupation: "Electrician",
    rating: 4.8,
    price: "$100",
    image: require("../../../../assets/images/home/electricMan.png"),
  },
  {
    id: "2",
    name: "Jacob",
    occupation: "Plumber",
    rating: 4.8,
    price: "$100",
    image: require("../../../../assets/images/home/plumberMan.png"),
  },
  {
    id: "3",
    name: "Jackson",
    occupation: "Electrician",
    rating: 4.8,
    price: "$100",
    image: require("../../../../assets/images/home/electricMan.png"),
  },
  {
    id: "4",
    name: "Jackson",
    occupation: "Electrician",
    rating: 4.8,
    price: "$100",
    image: require("../../../../assets/images/home/plumberMan.png"),
  },
];

export default function ServiceProvider() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View
      className="bg-white border border-[#D4E0EB] flex-1 justify-center items-center rounded-lg mr-3"
      style={{ width: scale(149), height: verticalScale(210) }}
    >
      <Image
        source={item.image}
        resizeMode="contain"
        style={{
          width: scale(72),
          height: verticalScale(110),
        }}
      />
      <View className="flex-1 pb-[10%] justify-end ">
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
          onPress={() => navigation.navigate("ProviderDetailsScreen")}
          style={{ width: scale(124), height: verticalScale(25) }}
          className="bg-[#0054A5] border border-[#0054A5] mt-[3%] rounded-md py-[3%] px-[3%]"
        >
          <Text className="text-white text-center text-[10px] font-poppins-500medium">
            Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View className="flex-1 mb-[2%] mt-[3%] mx-[6%]">
      <View className="flex-row justify-between">
        <Text className="font-poppins-semiBold text-base text-[#6B7280]">
          Popular Service Providers
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("ServiceProviderScreen")}
        >
          <Text className="font-poppins-semiBold text-base text-[#18649F]">
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1 mt-[1.5%]">
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
