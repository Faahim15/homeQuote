import { View } from "react-native";
import CustomHeader from "../../components/auth/CustomHeader";
import PasswordField from "../../components/auth/PasswordField";
import FormButton from "../../components/auth/FormButton";

export default function ResetPasswordScreen() {
  return (
    <View className="flex-1 bg-[#F9FAFB] ">
      <CustomHeader
        title="Now reset Your"
        nestedTitle="Password"
        subtitle="Enter the code that was sent to your email."
      />
      <View className="mx-[6.4%] mt-[8%] ">
        <PasswordField label="New Password" />
        <PasswordField label="Confirm New Password" />
      </View>
      <FormButton title="Save Password" route="SignInScreen" />
    </View>
  );
}
