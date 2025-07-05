import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  scale,
  verticalScale,
} from "../../../components/adaptive/Adaptiveness";

// ../../../../../assets/images/home/bytesize_location.png
// ../../../../../assets/images/home/DP.png
export default function HomeScreen() {
  return (
    <View className="flex-1  bg-[#F9FAFB]">
      <View>
        <Image
          style={{
            width: scale(32),
            height: verticalScale(32),
            borderRadius: scale(16),
          }}
          source={require("../../../../../assets/images/home/DP.png")}
        />
      </View>
    </View>
  );
}
