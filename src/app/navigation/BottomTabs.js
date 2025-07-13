import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import your screen components
import ForgetPasswordScreen from "../screens/auth/ForgetPasswordScreen";
import OnboardingHomeScreen from "../screens/onboarding/OnboardingHomeScreen";
import HomeScreen from "../screens/client/home/HomeScreen";
import { scale, verticalScale } from "../components/adaptive/Adaptiveness";
import ServiceProviderScreen from "./../screens/client/services/ServiceProviderScreen";
import PopularServiceScreen from "../screens/client/services/PopularServiceScreen";
import ElectricianProviderScreen from "../screens/client/services/ElectricianProviderScreen";
import ProviderDetailsScreen from "../screens/client/services/ProviderDetailsScreen";
import PostJobScreen from "../screens/jobs/posts/PostJobScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen
      name="PopularServiceScreen"
      component={PopularServiceScreen}
    />
    <Stack.Screen
      name="ServiceProviderScreen"
      component={ServiceProviderScreen}
    />
    <Stack.Screen
      name="ElectricianProviderScreen"
      component={ElectricianProviderScreen}
    />
    <Stack.Screen
      name="ProviderDetailsScreen"
      component={ProviderDetailsScreen}
    />
  </Stack.Navigator>
);
export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Jobs") {
            return (
              <View style={{ width: size, height: size }}>
                <Ionicons
                  name="document-text-outline"
                  size={size}
                  color={color}
                />
                <Ionicons
                  name="add-circle"
                  size={size * 0.4}
                  color={color}
                  style={{
                    position: "absolute",
                    bottom: -2,
                    right: -1,
                    backgroundColor: "#fff",
                  }}
                />
              </View>
            );
          }

          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "My Jobs") {
            iconName = focused ? "reader-outline" : "reader-outline";
          } else if (route.name === "Chat") {
            iconName = focused ? "chatbubble" : "chatbubble-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#175994",
        tabBarInactiveTintColor: "#000000",
        tabBarStyle: {
          height: verticalScale(64),
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB",
          paddingBottom: verticalScale(8),
          paddingTop: verticalScale(8),
          borderBottomLeftRadius: scale(10),
          borderBottomRightRadius: scale(10),
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Jobs" component={PostJobScreen} />
      <Tab.Screen name="My Jobs" component={OnboardingHomeScreen} />
      <Tab.Screen name="Profile" component={ServiceProviderScreen} />
      <Tab.Screen name="Chat" component={ServiceProviderScreen} />
    </Tab.Navigator>
  );
}
