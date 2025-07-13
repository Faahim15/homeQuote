import { View } from "react-native";
import CustomButton from "../client/PDetails/CustomButton";
import { useState } from "react";

export default function ButtonGroup() {
  const [activeIndex, setActiveIndex] = useState(null);
  const titles = ["Urgent (today)", "Asap (within a week)", "Next Week"];
  return (
    <View>
      {/* Button Selection */}
      {titles.map((title, index) => (
        <CustomButton
          key={index}
          title={title}
          selected={activeIndex === index}
          onPress={() => setActiveIndex(index)}
        />
      ))}
    </View>
  );
}
