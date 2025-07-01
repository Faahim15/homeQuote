import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/onboarding/WelcomeScreen";
export default function AppStackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="welcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}
