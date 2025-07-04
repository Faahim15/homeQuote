import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/onboarding/WelcomeScreen";
import QuoteCompareScreen from "../screens/onboarding/QuoteCompareScreen";
import FindServiceScreen from "../screens/onboarding/FindServiceScreen";
import WelcomeToQuotoScreen from "../screens/onboarding/WelcomeToQuotoScreen";
import OnboardingHomeScreen from "../screens/onboarding/OnboardingHomeScreen";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import ForgetPasswordScreen from "../screens/auth/ForgetPasswordScreen";

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

      {/* auth Screens */}

      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
      />
    </Stack.Navigator>
  );
}
