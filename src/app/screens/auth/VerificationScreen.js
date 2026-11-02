import { View, Text, TouchableOpacity } from "react-native";
import CustomHeader from "../../components/auth/CustomHeader";
import VerificationCodeField from "../../components/auth/VerificationCodeField";
import ShortMessage from "../../components/auth/ShortMessage";
import { useNavigation } from "@react-navigation/native";
export default function VerificationScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white ">
      <CustomHeader
        title="Enter Verification"
        nestedTitle="Code"
        subtitle="Enter the code that was sent to your email."
      />
      <VerificationCodeField />
      <ShortMessage
        route="ResetPasswordScreen"
        title="Didn't receive the code?"
        btnText="Resend"
      />
      <View className=" flex-1 justify-end pb-[20%]">
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
          className=" bg-[#0054A5] mx-[6%] rounded-lg py-[4%]"
        >
          <Text className="text-white text-center text-base font-poppins-semiBold ">
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
