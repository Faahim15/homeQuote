import { View, Text, TextInput } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { verticalScale } from '../adaptive/Adaptiveness';

export default function TextField({label,placeholder,IconName}) {
  return (
      <View className="mb-[4%]">
            <Text className="font-poppins-400regular text-base text-[#000] mb-[2%]">
              {label}
            </Text>
            <View className="flex-row items-center bg-[#FFF] border border-[#DCDCDC] rounded-md px-[4%] py-[3%]">
              <Ionicons name={IconName} size={20} color="#9E9E9E" />
              <TextInput
                className="flex-1 font-poppins-400regular ml-[3%] text-sm  bg-[#fff] text-black "
                placeholder={placeholder}
                placeholderTextColor="#6B7280"
                // value={formData.fullName}
                // onChangeText={(text) => handleInputChange("fullName", text)}
                style={{ paddingTop: verticalScale(16) }}
              />
            </View>
          </View>
  )
}