import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/onboarding/WelcomeScreen";
import QuoteCompareScreen from "../screens/onboarding/QuoteCompareScreen";
import FindServiceScreen from "../screens/onboarding/FindServiceScreen";
import WelcomeToQuotoScreen from "../screens/onboarding/WelcomeToQuotoScreen";
import OnboardingHomeScreen from "../screens/onboarding/OnboardingHomeScreen";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import ForgetPasswordScreen from "../screens/auth/ForgetPasswordScreen";
import VerificationScreen from "../screens/auth/VerificationScreen";
import ResetPasswordScreen from "../screens/auth/ResetPasswordScreen";
import BottomTabs from "./BottomTabs";
import ViewAllGalleryScreen from "../screens/client/services/ViewAllGalleryScreen";
import BookProviderScreen from "../screens/client/services/booked/BookProviderScreen";
import PlaceSearchModal from "../components/shared/PlaceSearchModal";
import BookingCalendar from "./../components/shared/BookingCalender";
import BookingDetailsScreen from "../screens/client/services/booked/BookingDetailsScreen";

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
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />

      {/* Home Screens */}

      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> 
      <Stack.Screen name="PopularSeviceScreen" component={PopularServiceScreen} /> 
      <Stack.Screen name="ServiceProviderScreen" component={ServiceProviderScreen} />  */}
      <Stack.Screen
        name="ViewAllGalleryScreen"
        component={ViewAllGalleryScreen}
      />

      {/* book service ProviderScreen */}

      <Stack.Screen name="BookProviderScreen" component={BookProviderScreen} />
      <Stack.Screen name="BookingCalender" component={BookingCalendar} />
      <Stack.Screen
        name="BookingDetailsScreen"
        component={BookingDetailsScreen}
      />

      {/* Location Picker */}
      <Stack.Screen
        name="PlaceSearchModal"
        component={PlaceSearchModal}
        options={{ presentation: "modal", title: "Search Location" }}
      />

      {/* BottomTabs */}

      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
}
