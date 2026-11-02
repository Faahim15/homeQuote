import { View, Text } from "react-native";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppStackNavigation from "./src/app/navigation/AppStackNavigation";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  // // Temporary simple screen to test Tailwind
  // return (
  //   <View className="flex-1 items-center justify-center bg-white">
  //     <Text className="text-2xl font-bold text-red-200">Hello World</Text>
  //   </View>
  // );

  // When ready, uncomment this for navigation

  return (
    <SafeAreaView className="flex-1 bg-[#F9FAFB] ">
      {/* <View>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
      </View> */}
      <NavigationContainer>
        <AppStackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}
