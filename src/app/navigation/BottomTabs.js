import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import your screen components
import ForgetPasswordScreen from "../screens/auth/ForgetPasswordScreen";
import VerificationScreen from "../screens/auth/VerificationScreen";
import OnboardingHomeScreen from "../screens/onboarding/OnboardingHomeScreen";
import HomeScreen from "../screens/client/home/HomeScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "Jobs") {
            iconName = focused ? "briefcase" : "briefcase-outline";
          } else if (route.name === "Services") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Chat") {
            iconName = focused ? "chatbubble" : "chatbubble-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#3B82F6",
        tabBarInactiveTintColor: "#6B7280",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB",
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Chat" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ForgetPasswordScreen} />
      <Tab.Screen name="Profi" component={OnboardingHomeScreen} />
    </Tab.Navigator>
  );
}
