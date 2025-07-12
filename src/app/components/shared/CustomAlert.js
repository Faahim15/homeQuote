import { View, Text, TouchableOpacity, Modal } from "react-native";

export default function CustomAlert({ visible, onClose, onCurrentLocation }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 bg-black/50 justify-center items-center">
        <View className="bg-white p-6 rounded-2xl w-[80%]">
          <Text className="text-lg font-poppins-500medium mb-4">
            Select Location
          </Text>
          <Text className="text-gray-600 font-poppins-400regular mb-6">
            Choose how you want to set your location:
          </Text>

          <View className="flex-row font-poppins-semiBold justify-end gap-[4%] ">
            <TouchableOpacity onPress={onClose}>
              <Text className="text-red-500 font-poppins-400regular">
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCurrentLocation}>
              <Text className="text-blue-600 font-poppins-400regular ">
                Current Location
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
