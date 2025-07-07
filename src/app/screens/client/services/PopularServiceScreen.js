import { View, Text, FlatList, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  {
    title: "Maintenance",
    data: [
      { name: "Air Condition", icon: require("../../../../../assets/images/home/maintenance/AirCooler.png") },
      { name: "Electric Work", icon: require("../../../../../assets/images/home/maintenance/AirCooler.png") },
      { name: "Siding repair", icon: require("../../../../../assets/images/home/maintenance/AirCooler.png") },
    ],
  },
  {
    title: "Cleaning",
    data: [
      { name: "Home Flooring", icon: require("../../../../../assets/images/home/maintenance/AirCooler.png") },
      { name: "Gutter", icon: require("../../../../../assets/images/home/maintenance/AirCooler.png") },
      { name: "Carpet", icon: require("../../../../../assets/images/home/maintenance/AirCooler.png") },
    ],
  },
  {
    title: "Home improvement",
    data: [
      { name: "Drilling", icon: require("../../../../../assets/images/home/maintenance/AirCooler.png") },
      { name: "lawn", icon: require("../../../../../assets/images/home/maintenance/AirCooler.png") },
      { name: "Weed control", icon: require("../../../../../assets/images/home/maintenance/AirCooler.png") },
    ],
  },
  {
    title: "Security",
    data: [
      { name: "Cameras", icon: require("../../../../../assets/images/home/maintenance/AirCooler.png") },
      { name: "Burglar alarm", icon: require("../../../../../assets/images/home/maintenance/AirCooler.png") },
      { name: "Sturdy lock", icon: require("../../../../../assets/images/home/maintenance/AirCooler.png") },
    ],
  },
];

const ServiceCard = ({ item }) => (
  <View
    className="bg-white w-[30%] rounded-2xl mb-[5%] items-center justify-center p-[4%] shadow-sm"
    style={{ elevation: 2 }}
  >
    <Image
      source={item.icon}
      resizeMode="contain"
      className="w-full aspect-[1] mb-[8%]"
    />
    <Text className="text-xs text-center text-zinc-700 font-medium">
      {item.name}
    </Text>
  </View>
);

export default function PopularServiceScreen() {
  return (
    <ScrollView className="bg-white flex-1 px-[5%] pt-[4%]">
      <View className="flex-row items-center mb-[4%]">
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="text-lg font-semibold ml-[3%]">Popular Services</Text>
      </View>

      {categories.map((section, index) => (
        <View key={index} className="mb-[6%]">
          <Text className="text-base font-medium mb-[3%] text-zinc-700">
            {section.title}
          </Text>

          <FlatList
            data={section.data}
            renderItem={({ item }) => <ServiceCard item={item} />}
            keyExtractor={(item, idx) => idx.toString()}
            numColumns={3}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            scrollEnabled={false}
          />
        </View>
      ))}
    </ScrollView>
  );
}
