import { View, Text, Image, FlatList } from "react-native";
import { scale, verticalScale } from "../../adaptive/Adaptiveness";
import { XStyle } from "../../../constants/ReusableFunction";

//{ width: scale(327), height: verticalScale(633) }

const imagesData = [
  {
    id: "1",
    image: require("../../../../../assets/images/home/jobs/summary1.png"),
  },
  {
    id: "2",
    image: require("../../../../../assets/images/home/jobs/summary2.png"),
  },
  {
    id: "3",
    image: require("../../../../../assets/images/home/jobs/summary2.png"),
  },
  {
    id: "4",
    image: require("../../../../../assets/images/home/jobs/summary2.png"),
  },
  {
    id: "5",
    image: require("../../../../../assets/images/home/jobs/summary1.png"),
  },
  {
    id: "6",
    image: require("../../../../../assets/images/home/jobs/summary1.png"),
  },
];
function showImages({ item }) {
  return (
    <View>
      <Image
        source={item.image}
        style={{
          width: scale(90),
          height: verticalScale(80),
          borderRadius: scale(4),
        }}
      />
    </View>
  );
}
export default function JobSummary() {
  return (
    <View
      style={XStyle.shadowBox}
      className="py-[4%] px-[3%] mt-[3%] bg-white border border-[#D4E0EB] "
    >
      <View>
        <Text className="font-poppins-500medium text-base text-[#565656] ">
          Tv repair and installation
        </Text>
        <View className="border-b border-[#CACACA] mb-[2%] mt-[3%] ">
          <Image
            style={{ width: scale(310), height: verticalScale(177) }}
            className="rounded-md  mb-[2%] "
            source={require("../../../../../assets/images/home/jobs/summary1.png")}
          />
        </View>
        <View className="mt-[1%]">
          <FlatList
            data={imagesData}
            renderItem={showImages}
            keyExtractor={(item) => item.id}
            horizontal
            ItemSeparatorComponent={() => (
              <View style={{ paddingRight: scale(20) }} />
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}
