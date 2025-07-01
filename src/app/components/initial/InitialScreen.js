import { View, Text, Image } from "react-native";
import ProgressDots from "./ProgressDots";
import { useNavigation } from "@react-navigation/native";
export default function InitialScreen({ activeIndex }) {
  const navigation = useNavigation();
  return (
    <View className="absolute flex-row justify-between mx-[6%] mt-[3%]">
      <ProgressDots activeIndex={activeIndex} />
      <Text
        onPress={() => navigation.navigate("WelcomeToQuotoScreen")}
        className="font-poppins-500medium text-sm text-center"
      >
        Skip
      </Text>
    </View>
  );
}
