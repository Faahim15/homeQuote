import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import your screen components
import ForgetPasswordScreen from "../screens/auth/ForgetPasswordScreen";
import OnboardingHomeScreen from "../screens/onboarding/OnboardingHomeScreen";
import HomeScreen from "../screens/client/home/HomeScreen";
import { scale, verticalScale } from "../components/adaptive/Adaptiveness";
import ServiceProviderScreen from './../screens/client/services/ServiceProviderScreen';

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
        tabBarActiveTintColor: "#175994",
        tabBarInactiveTintColor: "#000000",
        tabBarStyle: { 
          height:verticalScale(64),
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB",
          paddingBottom: verticalScale(8) ,
          paddingTop: verticalScale(8),
          borderBottomLeftRadius:scale(10),
          borderBottomRightRadius:scale(10)
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Jobs" component={ForgetPasswordScreen} />
      <Tab.Screen name="Services" component={OnboardingHomeScreen} />
      <Tab.Screen name="Profile" component={ServiceProviderScreen} />
      <Tab.Screen name="Chat" component={ServiceProviderScreen} />
      
    </Tab.Navigator>
  );
}
