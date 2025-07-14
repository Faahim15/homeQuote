import { View, Text } from "react-native";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";

export default function Specializations() {
  const titles = [
    "Residential",
    "Commercial",
    "HVAC",
    "Lighting",
    "Repair",
    "Home Installations",
  ];
  return (
    <View className="mt-[4%]">
      <Text className="font-poppins-semiBold text-base text-[#6B7280] ">
        Specializations
      </Text>
      <View className="flex-row flex-wrap gap-[3%] mt-[3%] ">
        {titles.map((title, idx) => {
          return (
            <View
              style={{
                height: verticalScale(35),
                marginBottom: verticalScale(4),
              }}
              className="bg-white border rounded-md border-[#D4E0EB] px-[3%] py-[3%] items-center justify-center "
              key={idx}
            >
              <Text className="font-poppins-500medium text-xs text-[#175994] ">
                {title}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
