import { View,Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CustomHeader (){
      return ( 
       <View className='flex-row ml-[6%] gap-[3%]' >
             <Ionicons name="arrow-back" size={24} color="#000" /> 
             <Text className='font-poppins-semiBold text-xl ' >Popular Services</Text>
          </View>
   
      );
}