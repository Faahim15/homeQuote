import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native"
import ProgressDots from "./ProgressDots"

const { width, height } = Dimensions.get("window")

export default function OnboardingScreen({ data, onNext, onSkip, isLastScreen, totalScreens, currentIndex }) {
  return (
    <View className="flex-1 bg-white">
      {/* Header with progress and skip */}
      <View className="flex-row justify-between items-center px-[5%] pt-[3%]">
        <ProgressDots total={totalScreens} current={currentIndex} />
        <TouchableOpacity onPress={onSkip}>
          <Text className="text-gray-600 text-base font-medium">Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View className="flex-1 justify-center items-center px-[8%]">
        {/* Image container */}
        <View className="w-[85%] h-[45%] mb-[8%]">
          <Image source={data.image} className="w-full h-full" resizeMode="contain" />
        </View>

        {/* Title */}
        <Text className="text-2xl font-bold text-gray-900 text-center mb-[4%]">{data.title}</Text>

        {/* Description */}
        <Text className="text-base text-gray-600 text-center leading-6 px-[2%]">{data.description}</Text>
      </View>

      {/* Bottom buttons */}
      <View className="px-[8%] pb-[8%]">
        {/* Next button */}
        <TouchableOpacity onPress={onNext} className="bg-blue-600 rounded-lg py-[4%] mb-[3%]" activeOpacity={0.8}>
          <Text className="text-white text-center text-base font-semibold">
            {isLastScreen ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>

        {/* Skip to home button */}
        <TouchableOpacity onPress={onSkip} className="border border-gray-300 rounded-lg py-[4%]" activeOpacity={0.7}>
          <Text className="text-gray-700 text-center text-base font-medium">Skip to home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
