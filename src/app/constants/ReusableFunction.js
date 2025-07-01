import { useNavigation } from "@react-navigation/native";

export const skipHandler = () => {
  const navigation = useNavigation();
  navigation.navigate("OnboardingHomeScreen");
  console.log("pressed!");
};
