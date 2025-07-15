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
    image: require("../../../../../assets/images/home/jobs/summary1.png"),
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
export default function ProviderInfo({ serviceData }) {
  const {
    price,
    profileImage,
    providerName,
    rating,
    reviews,
    serviceType,
    timeAgo,
    designation,
    bookingDate,
    bookingHours,
    specializations,
    description,
    address,
  } = serviceData;
  console.log(serviceData);
  return (
    <View
      style={XStyle.shadowBox}
      className="py-[4%] px-[3%] mt-[3%] bg-white border border-[#D4E0EB] "
    >
      <View>
        <Text className="font-poppins-500medium text-base text-[#565656] ">
          {serviceType}
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
              <View style={{ paddingRight: scale(10) }} />
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View className="flex-col border-b border-[#CACACA] mb-[2%] w-full overflow-hidden">
          <View className="flex-col gap-[6%] mt-[3%]">
            <Text className="font-poppins-500medium text-xs text-[#5C5F62]">
              Job Details
            </Text>
            <Text className="font-poppins-400regular text-justify text-xs text-[#5C5F62] ">
              {description}
            </Text>
          </View>
          {/* Service */}
          <View className="flex-row mt-[3%] justify-between ">
            <Text className="font-poppins-semiBold text-xs text-[#6B7280]">
              Service
            </Text>
            <Text className="font-poppins-400regular text-justify overflow-hidden text-xs text-[#565656]">
              {designation}
            </Text>
          </View>
          {/* Specializations */}
          <View className="flex-row mt-[3%] justify-between ">
            <Text className="font-poppins-semiBold text-xs text-[#6B7280]">
              Specializations
            </Text>
            <View className="flex-row overflow-hidden flex-wrap">
              {specializations.map((item, idx) => (
                <Text
                  className="font-poppins-400regular text-justify overflow-hidden text-xs text-[#565656]"
                  key={idx}
                >
                  {item + (idx !== specializations.length - 1 ? ", " : "")}
                </Text>
              ))}
            </View>
          </View>
          <View className="flex-row overflow-hidden mt-[3%] w-full justify-between">
            <Text className="font-poppins-semiBold text-xs text-[#6B7280]">
              Address
            </Text>
            <Text className="font-poppins-400regular text-justify overflow-hidden text-xs text-[#565656]">
              {address}
            </Text>
          </View>
          {/* Booking Date */}
          <View className="flex-row mt-[3%] justify-between ">
            <Text className="font-poppins-semiBold text-xs text-[#6B7280]">
              Booking date
            </Text>
            <Text className="font-poppins-400regular text-justify overflow-hidden text-xs text-[#565656]">
              {bookingDate}
            </Text>
          </View>
          {/* Booking hours */}
          <View className="flex-row mt-[3%] justify-between ">
            <Text className="font-poppins-semiBold text-xs text-[#6B7280]">
              Booking Hours
            </Text>
            <Text className="font-poppins-400regular text-justify overflow-hidden text-xs text-[#565656]">
              {bookingHours}
            </Text>
          </View>
        </View>

        <View className="flex-row justify-between">
          <Text className="font-poppins-semiBold text-sm text-[#565656] ">
            Price
          </Text>
          <Text className="font-poppins-semiBold text-sm text-[#175994] ">
            {price}
          </Text>
        </View>
      </View>

      <View>
        <Text className="font-poppins-semiBold text-base text-[#1F2937]">
          Service by
        </Text>
        <View>
          <View>
            <Image
              style={{
                width: scale(80),
                height: verticalScale(80),
                borderRadius: scale(40),
              }}
              source={{
                uri: profileImage,
              }}
              className="mt-[2%]"
            />
            <View>
              <Text>Jackson</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
