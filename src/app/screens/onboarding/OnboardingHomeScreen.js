import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";

import { scale, verticalScale } from "../../components/adaptive/Adaptiveness";
import JobsPost from "../../components/initial/JobsPost";
import UserSelectionButtons from "../../components/initial/UserSelectionButtons";
import { XStyle } from "../../constants/ReusableFunction";
import { useNavigation } from "@react-navigation/native";
export default function OnboardingHomeScreen() { 
  const jobData = Array.from({ length: 6 }); 
  const navigation = useNavigation();
    function clientHandler() {
    navigation.navigate("SignUpScreen");
  }
  function backtoHomehandler() {}
  return (
    <View className="flex-1 bg-[#F9FAFB] ">
      <ScrollView>
        {/* Header section */}

        <View className="justify-center mx-[6%] mt-[1%] ">
          <View className="flex-row justify-between ">
            <Text className="font-poppins-bold text-base">
              Welcome to Quoto!
            </Text>
            <Image
              source={require("../../../../assets/images/home/notificationIcon.png")}
              resizeMode="cover"
            />
          </View>
          <Text className="text-[#4D4D4D] font-poppins-400regular text-justify w-[80%] text-xs ">
            Connecting homeowners with trusted local pros - fast, simple, and
            reliable
          </Text>
          <View className="flex-row gap-[1%] mt-[2%]">
            <Image
              source={require("../../../../assets/images/home/bytesize_location.png")}
              resizeMode="cover"
              className="mt-[0.5%]"
            />
            <Text className="font-poppins-400regular text-xs text-[#8891AA] ">
              38 Chestnut StreetStaunton
            </Text>
          </View>
        </View>

        {/* Header section ends here  */}

        {/* Today's Jobs section starts here */}
        <Text className="font-poppins-semiBold text-base text-[#6B7280] mt-[6%] mx-[6%] ">
          Today's Jobs
        </Text>
        <View className="mt-[3%] w-full h-[37%] ">
          <FlatList
            horizontal
            data={jobData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={() => <JobsPost />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: scale(24),
              paddingRight: scale(8),
            }}
            ItemSeparatorComponent={() => <View style={{ width: scale(16) }} />}
          />
        </View>

        {/* Today's Jobs ends here */}

        {/* Active Jobs section */}
        <Text className=" mt-[3%] font-poppins-semiBold text-base text-[#6B7280] mx-[6%] ">
          Active Jobs
        </Text>

        <View className="  mt-[3%] w-full h-[37%] ">
          <FlatList
            horizontal
            data={jobData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={() => <JobsPost />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 24, paddingRight: 8 }}
            ItemSeparatorComponent={() => <View style={{ width: scale(1) }} />}
          />
        </View>

        {/* Active Jobs section ends here */}

        {/* User Selection section ends here */}
      </ScrollView>
      {/* User Selection section starts here */}
      <View
        style={[XStyle.lightShadow, XStyle.borderStyle]}
        className=" justify-center items-center border border-[#FFFFFF] px-[6.4%] py-[9%]"
      >
        <View className="flex-row gap-[4%]">
          <UserSelectionButtons onPress={clientHandler} title="Join as Client" />
          <UserSelectionButtons
            title="Join as Provider"
            backgroundColor="#fff"
            textColor="#175994"
          />
        </View>

        {/* back to onboardingButton */}

        <View className="">
          <Pressable
            onPress={backtoHomehandler}
            style={{
              width: scale(280),
              height: scale(42),
            }}
            className="bg-white mt-[2%] px-[2.5%] py-[2.5%] border border-[#EF4444] rounded-md "
          >
            <Text className="font-poppins-500medium text-[#EF4444] text-base text-center">
              Back to onboarding
            </Text>
          </Pressable>
        </View>
        {/* User Selection section starts here */}
      </View>
    </View>
  );
}
