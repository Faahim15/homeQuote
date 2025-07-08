// shadows.js
import { StyleSheet, Platform } from "react-native";
import {
  scale,
  SCREEN_WIDTH,
  verticalScale,
} from "../components/adaptive/Adaptiveness";

export const XStyle = StyleSheet.create({
  lightShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: -2, height: -2 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  // cardShadow: {
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: "#fff",
  //       shadowOffset: { width: -2, height: -2 },
  //       shadowOpacity: 0.15,
  //       shadowRadius: 10,
  //     },
  //     android: {
  //       elevation: 4,
  //     },
  //   }),
  // },
  borderStyle: {
    width: SCREEN_WIDTH,
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
});
