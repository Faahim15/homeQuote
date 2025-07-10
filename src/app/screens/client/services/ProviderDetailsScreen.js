import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  scale,
  verticalScale,
} from "../../../components/adaptive/Adaptiveness";
import ArrowBack from "../../../components/auth/ArrowBack";
import { XStyle } from "../../../constants/ReusableFunction";
import CustomButton from "../../../components/client/CustomButton";
import TimeSlot from "../../../components/client/PDetails/TimeSlot";
import { imageData } from "../../../constants/data/provider/ImageData";
import Gallery from "../../../components/client/PDetails/Gallery";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import StarRating from "../../../components/client/PDetails/StarRating";
import Reviews from "../../../components/client/PDetails/Reviews";
import Banner from "../../../components/client/PDetails/Banner";
import PerfomanceMetrics from "../../../components/client/PDetails/PerfomanceMetrics";

export default function ProviderDetailsScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        {/* Baner */}

        <LinearGradient
          colors={["#319FCA", "#18649F"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="rounded-md overflow-hidden relative"
          style={{
            height: verticalScale(344),
            borderBottomLeftRadius: scale(16),
            borderBottomRightRadius: scale(16),
          }}
        >
          <View className="w-10 h-10 mx-[6%] mt-[6%] rounded-[20px] bg-white ">
            <ArrowBack />
          </View>
          <View className="flex-1 ">
            <Image
              source={require("../../../../../assets/images/home/electrician/electrician3.png")}
              style={{
                width: scale(264),
                height: verticalScale(290),
                marginTop: verticalScale(0),
                marginLeft: scale(30),
              }}
            />
          </View>
        </LinearGradient>

        <Banner />
        <View className="flex-row mt-[3%] mx-[6%] justify-between">
          <Text className="font-poppins-semiBold text-base text-[#6B7280]">
            Booking Hours
          </Text>
          <Text className="font-poppins-400regular text-base text-[#565656]">
            $20/hr
          </Text>
        </View>

        {/* PerfomanceMetrics */}

        <PerfomanceMetrics />
        <View className="mx-[6%] mt-[3%] ">
          <Text className="font-poppins-semiBold text-base text-[#565656]">
            Skills
          </Text>
        </View>

        {/* Book button */}
        <CustomButton title="Book" />

        {/* Time Solt */}

        <View className="flex-row justify-start gap-[3%] mx-[6%] mt-[3%] ">
          <TimeSlot title="7:00 AM" />
          <View>
            <Text className="font-poppins-semiBold pt-[2%] text-base text-[#919191] ">
              To
            </Text>
          </View>
          <TimeSlot title="10:00 PM" />
        </View>

        {/* Bio  */}
        <View className="mt-[3%] mx-[6%] ">
          <Text className="font-poppins-semiBold text-base mt-[2%] text-[#565656]">
            Bio
          </Text>
          <Text className="font-poppins-500medium text-xs text-justify text-[#565656]">
            I'm Jackson , a licensed electrician with a passion for safe,
            efficient, and code-compliant electrical work. With over 30 years of
            hands-on experience, I’m committed to powering your home with
            precision and care.
          </Text>
        </View>

        {/* Gallery Section */}
        <View>
          <View className="flex-row justify-between mx-[6%] mt-[3%] ">
            <Text className="font-poppins-semiBold text-base text-[#565656]">
              Gallery
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewAllGalleryScreen")}
            >
              <Text className="font-poppins-500medium text-base text-[#175994]">
                View all
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Images section */}
        <Gallery />

        {/* Reviews */}
        <View className="mx-[6%] mt-[3%] ">
          <View>
            <Text className="font-poppins-semiBold text-base text-[#565656]">
              Review
            </Text>
          </View>
          <View className="">
            <Reviews rating={3.5} />
            <Reviews rating={5} />
            <Reviews rating={2} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
