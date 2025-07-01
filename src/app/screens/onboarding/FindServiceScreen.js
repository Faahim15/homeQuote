import { View, Image } from "react-native";
import InitialScreen from "../../components/initial/InitialScreen";
import CustomHeader from "../../components/initial/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/initial/CustomButton";
export default function FindServiceScreen() {
  const navigation = useNavigation();
  function onNextHandler() {
    navigation.navigate("WelcomeToQuotoScreen");
  }
  function skipHandler() {
    navigation.navigate("OnboardingHomeScreen");
  }
  return (
    <View className="flex-1 bg-[#F9FAFB]">
      <InitialScreen activeIndex={2} />
      <View className=" relative justify-center items-center ">
        {/* Background Image */}
        <Image
          source={require("../../../../assets/images/onboarding/bgImage.png")}
          className="w-[79%] h-[66%] rounded-3xl "
          resizeMode="cover"
        />

        {/* Onboarding Image on top */}
        <Image
          source={require("../../../../assets/images/onboarding/onboarding3.png")}
          className="absolute w-[60%] h-[80%] top-[3%] " // Adjust positioning as needed
          resizeMode="contain"
        />
      </View>

      <CustomHeader
        title="Find Services"
        subtitle="From plumbing and electrical to repairs and renovations - everything you need, in one place."
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
