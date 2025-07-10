import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function StarRating({ rating }) {
  const maxStars = 5;
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (i <= Math.floor(rating)) {
      // Full star
      stars.push(
        <Ionicons
          key={i}
          name="star"
          size={16}
          color="#F59E0B"
          className="mr-1"
        />
      );
    } else if (i - rating < 1) {
      // Half star
      stars.push(
        <Ionicons
          key={i}
          name="star-half"
          size={16}
          color="#F59E0B"
          className="mr-1"
        />
      );
    } else {
      // Empty star
      stars.push(
        <Ionicons
          key={i}
          name="star-outline"
          size={16}
          color="#F59E0B"
          className="mr-1"
        />
      );
    }
  }

  return <View className="flex-row">{stars}</View>;
}
