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
const cardWidth = width * 0.45; // 45% of screen width for responsiveness
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
    name: "Jackson",
    occupation: "Electrician",
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
  // Add more items if needed
];

const renderItem = ({ item }) => (
  <View
    className="bg-white rounded-2xl p-3 mr-3 shadow-sm"
    style={{ width: scale(156), height: verticalScale(250) }}
  >
    <Image
      source={item.image}
      resizeMode="contain"
      className="w-full aspect-[3/2] mb-2"
    />

    <Text className="text-base font-semibold text-zinc-800">{item.name}</Text>
    <Text className="text-sm text-gray-500 mb-1">{item.occupation}</Text>

    <View className="flex-row items-center mb-1">
      <Ionicons name="star" size={14} color="#facc15" />
      <Text className="ml-1 text-sm text-zinc-700">{item.rating}</Text>
      <Text className="ml-auto font-semibold text-sky-900">{item.price}</Text>
    </View>

    <TouchableOpacity className="bg-blue-700 rounded-md py-1 mt-1">
      <Text className="text-center text-white text-sm font-semibold">
        Details
      </Text>
    </TouchableOpacity>
  </View>
);

export default function ServiceProvider() {
  return (
    <View className="mt-[3%] mx-[6%] ">
      <View className="flex-row justify-between">
        <Text className="font-poppins-semiBold text-base text-[#6B7280] ">
          Popular Service Providers
        </Text>
        <Text className="font-poppins-semiBold text-base text-[#18649F] ">
          View all
        </Text>
      </View>
      <View>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
