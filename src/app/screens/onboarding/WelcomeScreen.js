import { View, Image } from "react-native";
import InitialScreen from "../../components/initial/InitialScreen";
import CustomHeader from "../../components/initial/CustomHeader";
import CustomButton from "../../components/initial/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { skipHandler } from "../../constants/ReusableFunction";
export default function WelcomeScreen() {
  const navigation = useNavigation();
  function onNextHandler() {
    navigation.navigate("QuoteCompareScreen");
  }
  function skipHandler() {
    navigation.navigate("OnboardingHomeScreen");
  }

  return (
    <View className="flex-1 bg-[#F9FAFB]">
      <InitialScreen activeIndex={0} />

      <View className=" relative justify-center items-center ">
        {/* Background Image */}
        <Image
          source={require("../../../../assets/images/onboarding/bgImage.png")}
          className="w-[79%] h-[66%] rounded-3xl "
          resizeMode="cover"
        />

        {/* Onboarding Image on top */}
        <Image
          source={require("../../../../assets/images/onboarding/onboarding1.png")}
          className="absolute w-[70%] h-[93%] top-[-1%] " // Adjust positioning as needed
          resizeMode="contain"
        />
      </View>

      <CustomHeader
        title="Welcome to QUOTO"
        subtitle="Take a photo, describe the issue, and let local pros come to you. No hassle, no endless forms — just fast, easy service requests."
      />
      <CustomButton onPress={onNextHandler} title="Next" />
      <CustomButton
        title="Skip to home"
        backgroundColor="#fff"
        color="#175994"
        marginTop={16}
        onPress={skipHandler}
      />
    </View>
  );
}
