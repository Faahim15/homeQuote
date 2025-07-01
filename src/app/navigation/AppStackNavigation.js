import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/onboarding/WelcomeScreen";
import QuoteCompareScreen from "../screens/onboarding/QuoteCompareScreen";
import FindServiceScreen from "../screens/onboarding/FindServiceScreen";
import WelcomeToQuotoScreen from "../screens/onboarding/WelcomeToQuotoScreen";
import OnboardingHomeScreen from "../components/initial/OnboardingHomeScreen";
export default function AppStackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="QuoteCompareScreen" component={QuoteCompareScreen} />
      <Stack.Screen name="FindServiceScreen" component={FindServiceScreen} />
      <Stack.Screen
        name="WelcomeToQuotoScreen"
        component={WelcomeToQuotoScreen}
      />
      <Stack.Screen
        name="OnboardingHomeScreen"
        component={OnboardingHomeScreen}
      />
    </Stack.Navigator>
  );
}
