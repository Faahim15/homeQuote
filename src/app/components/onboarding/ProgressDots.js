import { View } from "react-native"

export default function ProgressDots({ total, current }) {
  return (
    <View className="flex-row items-center">
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          className={`w-2 h-2 rounded-full mx-1 ${
            index === current ? "bg-gray-800" : index < current ? "bg-gray-400" : "bg-gray-300"
          }`}
        />
      ))}
    </View>
  )
}
