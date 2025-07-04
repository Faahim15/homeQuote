import { View, Text, TouchableOpacity } from "react-native";
import EmailField from "../../components/auth/EmailField";
import CustomHeader from "../../components/auth/CustomHeader";
import { useNavigation } from "@react-navigation/native";
export default function ForgetPasswordScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1  bg-[#F9FAFB]  ">
      {/* <ArrowBack />
      <View className="mt-[1.5%]  justify-center items-center ">
        <Text className="font-poppins-500medium text-2xl  text-[#292929] ">
          Forget your <Text className="text-[#319FCA]">Password?</Text>
        </Text>
        <Text
          style={{ letterSpacing: 0.2 }}
          className=" mt-[2%] font-poppins-400regular text-xs text-center "
        >
          Enter your email address to reset your password.
        </Text>
      </View> */}
      <CustomHeader
        title="Forget your"
        nestedTitle="Password?"
        subtitle="Enter your email address to reset your password."
      />
      <View className="mx-[6%] mt-[10%]">
        <EmailField label="Email" />
      </View>
      <View className=" flex-1 justify-end pb-[20%]">
        <TouchableOpacity
          onPress={() => navigation.navigate("VerificationScreen")}
          className=" bg-[#0054A5] mx-[6%] rounded-lg py-[4%]"
        >
          <Text className="text-white text-center text-base font-poppins-semiBold ">
            Get verification code
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
