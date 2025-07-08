import { View, Text, FlatList, Image, ScrollView } from "react-native";
import CustomHeader from "../../../components/client/CustomHeader";
import TopServices from "../../../components/client/TopServices";

export default function PopularServiceScreen() {
  return (
       <View className='flex-1 bg-[#F9F9F9] border border-orange-500 ' >
          <CustomHeader/> 
          
             {/* <Text className='font-poppins-semiBold text-base mt-[2.5%] mx-[6%]'>Maintenance</Text>      */} 
            <ScrollView className='flex-1 ' >

            <TopServices/>
            </ScrollView>

         
       </View>
  );
}
