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

  return (
    <SafeAreaView  className='flex-1' >
      <NavigationContainer>
        <AppStackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}
