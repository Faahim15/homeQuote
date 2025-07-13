import { View, Text, Image } from "react-native";
import CustomTitle from "../../../../components/client/PDetails/CustomTitle";
import Summary from "../../../../components/client/PDetails/Summary";
import CustomButton from "../../../../components/client/CustomButton";
export default function BookingDetailsScreen() {
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <View className="px-[5%]">
        <CustomTitle title="Book Jackson" />
      </View>

      <View className="px-[6%]">
        <View className="mt-[3%] mb-[2%]">
          <Text className="font-poppins-500medium  text-base  text-[#5C5F62]">
            Review Summary
          </Text>
        </View>
        {/* <View className="" style={XStyle.shadowBox}>
          <View
            style={{ borderBottomColor: "#CACACA" }}
            className="flex-row border-b pb-[4%] items-center justify-between"
          >
            <Text className="font-poppins-semiBold  text-base text-[#565656]">
              Jackson
            </Text>
            <Image
              style={{ width: scale(62), height: verticalScale(70) }}
              source={require("../../../../../../assets/images/home/electrician/electrician3.png")}
            />
          </View>

          <View
            style={{ borderBottomColor: "#CACACA" }}
            className="flex-row border-b pb-[2%] justify-between mt-[3%] "
          >
            <View className="flex-col pt-[5%] gap-[12%]">
              <Text className="font-poppins-500medium text-xs text-[#919191] ">
                Service Type
              </Text>
              <Text className="font-poppins-semiBold text-xs text-[#565656] ">
                Price
              </Text>
            </View>
            <View className="flex-col gap-[8%] ">
              <View className="flex-row">
                <Ionicons name="star" size={12} color="#F59E0B" />
                <Text className="font-poppins-500medium text-xs text-[#F59E0B]">
                  {" "}
                  4.8
                </Text>
                <Text className="font-poppins-400regular text-xs text-[#18649F]">
                  {" "}
                  (8 Review)
                </Text>
              </View>
              <Text className="font-poppins-semiBold text-xs text-[#565656]">
                Electrician
              </Text>
              <Text className="font-poppins-500medium text-xs text-[#919191]">
                $20/hr
              </Text>
            </View>
          </View>
        </View> */}
        <Summary />
      </View>
      <View className="px-[6%]">
        <CustomButton title="Book" />
      </View>
    </View>
  );
}
