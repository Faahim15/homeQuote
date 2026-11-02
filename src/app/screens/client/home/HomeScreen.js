import { View, Text, ScrollView } from "react-native";
import HomeTopBar from "../../../components/client/HomeTopBar";
import PromoCard from "../../../components/client/PromoCard";
import ServiceCards from "../../../components/client/ServiceCards";
import PopularServices from "../../../components/client/PopularServices";
import ServiceProvider from "../../../components/client/ServiceProvider";

export default function HomeScreen() {
  return (
    <View className="flex-1  bg-[#F9FAFB]">
      <HomeTopBar />
      <PromoCard />
      <ScrollView className="flex-1 h-full">
        {/* Today's Jobs section starts here */}

        <View className="flex-row justify-between mt-[6%] mx-[6%]">
          <Text className="font-poppins-semiBold text-base text-[#6B7280] ">
            Today's Jobs
          </Text>
          <Text className="font-poppins-semiBold text-base text-[#18649F] ">
            View all
          </Text>
        </View>
        <ServiceCards />

        {/* Today's  Jobs section starts here */}

        {/* Active Jobs section starts here */}

        <View className="flex-row justify-between mt-[6%] mx-[6%]">
          <Text className="font-poppins-semiBold text-base text-[#6B7280] ">
            Active Jobs
          </Text>
          <Text className="font-poppins-semiBold text-base text-[#18649F] ">
            View all
          </Text>
        </View>
        <ServiceCards />
        {/* Active Jobs section ends here */}

        {/* popular service  */}
        <PopularServices />

        {/* Popular Service Provider section */}
        <ServiceProvider />
      </ScrollView>
    </View>
  );
}
