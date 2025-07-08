// import { View, Text, FlatList, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../adaptive/Adaptiveness";
import { XStyle } from "../../constants/ReusableFunction";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native"; 
import {categories} from '../../constants/data/DummyData'
const screenWidth = Dimensions.get("window").width;
const horizontalMargin = screenWidth * 0.12; // 6% left + 6% right
const cardGap = scale(16); // total gap between cards (4% ~ 16px if scale = 4)
const cardWidth = (screenWidth - horizontalMargin - cardGap * 2) / 3; 



const ServiceCard = ({ item }) => (

    <TouchableOpacity
      style={[
        { width: cardWidth, height: verticalScale(100) },
      ]}
      className="bg-white mr-[2%] rounded-lg border border-[#D4E0EB] items-center justify-center "
    >
      <Image
        source={item.icon}
        resizeMode="contain"
        style={{ width: scale(60), height: verticalScale(60) }}
        className=" mb-[15%]"
      />
      <Text className="text-center  font-poppins-semiBold text-xs text-gray-800">
        {item.name}
      </Text>
    </TouchableOpacity>
 

);

export default function TopServices() {
  return (
    <View className=" flex-1 mx-[6%]  mt-[2.5%] ">
      {categories.map((section, index) => (
        <View key={index} className="mb-[6%]">
          <Text className="font-poppins-semiBold text-[#565656] text-base">
            {section.title}
          </Text> 
       
       <View className=' mt-[1.5%]' >

          <FlatList
            data={section.data}
            renderItem={({ item }) => <ServiceCard item={item} />}
            keyExtractor={(item, idx) => idx.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToAlignment="start"
            snapToInterval={264}
            contentContainerStyle={{
              paddingRight: scale(60),
            }}
          />
       </View>

        </View>
      ))}
    </View>
  );
}
