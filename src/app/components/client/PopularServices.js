import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { XStyle } from "../../constants/ReusableFunction";
import { scale, verticalScale } from "../adaptive/Adaptiveness";
import { useNavigation } from "@react-navigation/native";
const screenWidth = Dimensions.get("window").width;
const horizontalMargin = screenWidth * 0.12; // 6% left + 6% right
const cardGap = scale(16); // total gap between cards (4% ~ 16px if scale = 4)
const cardWidth = (screenWidth - horizontalMargin - cardGap * 2) / 3;
const servicesData = [
  {
    id: "1",
    title: "Plumbing",
    icon: require("../../../../assets/images/home/plumbing.png"),
  },
  {
    id: "2",
    title: "Electics",
    icon: require("../../../../assets/images/home/electrics.png"),
  },
  {
    id: "3",
    title: "Solar",
    icon: require("../../../../assets/images/home/solar.png"),
  },
  {
    id: "4",
    title: "Plumbing",
    icon: require("../../../../assets/images/home/plumbing.png"),
  },
  {
    id: "5",
    title: "Solar",
    icon: require("../../../../assets/images/home/solar.png"),
  },
  {
    id: "6",
    title: "Plumbing",
    icon: require("../../../../assets/images/home/plumbing.png"),
  },
];

const ServiceItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={[
        XStyle.lightShadow,
        { width: cardWidth, height: verticalScale(100) },
      ]}
      className="bg-white mr-[2%] border border-[#D4E0EB] items-center justify-center "
    >
      <Image
        source={item.icon}
        resizeMode="contain"
        style={{ width: scale(60), height: verticalScale(60) }}
        className=" mb-[15%]"
      />
      <Text className="text-center  font-poppins-semiBold text-xs text-gray-800">
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default function PopularServices() { 
  const navigation = useNavigation();
  return (
    <View className="flex-1   mx-[6%] py-[3%]">
      {/* Header */}
      <View className="flex-row justify-between">
        <Text className="font-poppins-semiBold text-base text-[#6B7280] ">
          Popular Services
        </Text>
     <TouchableOpacity onPress={()=>navigation.navigate('PopularSeviceScreen')} >
          <Text className="font-poppins-semiBold text-base text-[#18649F] ">
          View all
        </Text>
     </TouchableOpacity>
      </View>

      {/* Services List */}
      <View className="flex-1  mt-[1.6%] ">
        <FlatList
          data={servicesData}
          renderItem={({ item }) => <ServiceItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          snapToAlignment="start"
          snapToInterval={264}
          //   contentContainerStyle={{
          //     paddingHorizontal: screenWidth * 0.06,
          //   }}
        />
      </View>
    </View>
  );
}
