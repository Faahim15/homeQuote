import { View, Text, TouchableOpacity } from "react-native";
import ArrowBack from "../../components/auth/ArrowBack";
import EmailField from "../../components/auth/EmailField";
import PasswordField from "../../components/auth/PasswordField";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ShortMessage from "../../components/auth/ShortMessage";
export default function SignInScreen() {
  const navigation = useNavigation();
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  return (
    <View className="flex-1  bg-[#F9FAFB]">
      <ArrowBack />
      <View className="mt-[1.5%]  justify-center items-center ">
        <Text className="font-poppins-500medium text-2xl  text-[#292929] ">
          Welcome Back!
        </Text>
        <Text className=" font-poppins-500medium  text-2xl  text-[#319FCA] ">
          Let's Sign in
        </Text>
      </View>
      <View className="mx-[6%] mt-[10%] ">
        <EmailField label="Email" />
        <PasswordField />
      </View>
      <View className="flex-row pl-[5.5%] pb-[6%] items-center ">
        <TouchableOpacity
          onPress={() => setAgreeToTerms(!agreeToTerms)}
          className="mr-[3%]"
        >
          <Ionicons
            name={agreeToTerms ? "checkbox" : "square-outline"}
            size={16}
            color={agreeToTerms ? "#909090" : "#9CA3AF"}
          />
        </TouchableOpacity>
        <View className="w-[80%] flex-row justify-between">
          <Text className="text-sm pt-[1%] font-poppins-400regular text-[#000000]">
            Remember me
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgetPasswordScreen")}
          >
            <Text className="text-base font-poppins-bold  text-[#175994] underline ">
              Forget me?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        className="bg-[#0054A5] mx-[6%] rounded-lg py-[4%]"
        disabled={!agreeToTerms}
        style={{ opacity: agreeToTerms ? 1 : 0.6 }}
      >
        <Text className="text-white text-center text-base font-poppins-semiBold ">
          Sign In
        </Text>
      </TouchableOpacity>

      <ShortMessage
        title="Don't you have an account?"
        btnText="Sign Up"
        route="SignUpScreen"
      />
    </View>
  );
}
