import { View, Text, Image } from "react-native";
import { Platform, StyleSheet } from "react-native";
import { scale, verticalScale } from "../adaptive/Adaptiveness";

export default function JobsPost({ title }) {
  return (
    <View
      style={styles.shadowStyle}
      className="mx-[6.4%] mt-[4%] w-[87.2%] h-[37%] justify-center items-center rounded-2xl "
    >
      <Image
        style={{ width: scale(295), height: verticalScale(160) }}
        source={require("../../../../assets/images/home/jobImg.png")}
      />
      <View className="flex-row mt-[4%] gap-[7%]  ">
        <View>
          <Image
            style={{ width: scale(48), height: verticalScale(48) }}
            source={require("../../../../assets/images/home/Avatar.png")}
          />
        </View>

        <View className="flex-col gap-[5%]">
          <Text className="font-poppins-semiBold text-base text-[#0D0D0D] ">
            Wallpaper on drawing room
          </Text>
          <View className="flex-row gap-[2%]">
            <Text className="font-poppins-400regular text-sm">by</Text>
            <Text className="font-poppins-400regular text-[#319FCA]  text-sm ">
              Amand Herlen
            </Text>
          </View>
          <View className="flex-row gap-[2%]">
            <Image
              source={require("../../../../assets/images/home/plus.png")}
            />
            <Text className="font-poppins-400regular text-sm text-[#6B7280] ">
              Painting/Indoor Painting
            </Text>
          </View>
          <View className="flex-row gap-[2%]">
            <Image
              source={require("../../../../assets/images/home/colouredLIcon.png")}
            />
            <Text className="font-poppins-400regular text-sm text-[#319FCA] ">
              Baker Street <Text className="text-[#6B7280]">| 2hrs ago</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  shadowStyle: {
    backgroundColor: "white", // Required for shadows to work
    paddingVertical: verticalScale(16),
    paddingHorizontal: scale(16),
    ...Platform.select({
      ios: {
        shadowColor: "#D4E0EB",
        shadowOffset: {
          width: 0,
          height: 2.56,
        },
        shadowOpacity: 1,
        shadowRadius: 5.11, // blur radius / 2 (10.22 / 2)
      },
      android: {
        elevation: 6,
        shadowColor: "#D4E0EB",
      },
    }),
  },
});
