import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InitialScreen from "../../components/initial/InitialScreen";
import CustomHeader from "../../components/initial/CustomHeader";
import CustomButton from "../../components/initial/CustomButton";

export default function QuoteCompareScreen() {
  const navigation = useNavigation();
  function onNextHandler() {
    navigation.navigate("FindServiceScreen");
  }
  function skipHandler() {
    navigation.navigate("OnboardingHomeScreen");
  }
  return (
    <View className="flex-1 bg-[#F9FAFB]">
      <InitialScreen activeIndex={1} />
      <View className=" relative justify-center items-center ">
        {/* Background Image */}
        <Image
          source={require("../../../../assets/images/onboarding/bgImage.png")}
          className="w-[79%] h-[66%] rounded-3xl "
          resizeMode="cover"
        />

        {/* Onboarding Image on top */}
        <Image
          source={require("../../../../assets/images/onboarding/onboarding2.png")}
          className="absolute w-[70%] h-[93%] top-[-4%] " // Adjust positioning as needed
          resizeMode="contain"
        />
      </View>

      <CustomHeader
        title="Compare Quotes"
        subtitle="Receive multiple quotes, check provider profiles, and choose based on reviews, pricing, and availability."
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
