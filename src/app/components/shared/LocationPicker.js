import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import CustomAlert from "./CustomAlert";

const LocationPicker = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Method 1: Get current location directly
  const getCurrentLocation = async () => {
    try {
      setIsLoading(true);
      console.log("Getting current location...");
      setShowAlert(false);
      // Request permission
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Please enable location permissions to use this feature."
        );
        return;
      }

      // Get current position
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      // Reverse geocode to get address
      const address = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (address.length > 0) {
        const addr = address[0];
        const formattedAddress =
          `${addr.name || ""} ${addr.street || ""}, ${addr.city || ""}, ${addr.region || ""}, ${addr.country || ""}`.trim();
        setSelectedLocation(formattedAddress);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to get current location. Please try again.");
      console.error("Location error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Method 2: Open Google Maps for location selection
  const openGoogleMapsForLocation = async () => {
    try {
      // First get current location as starting point
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Please enable location permissions to use this feature."
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      // Open Google Maps with current location
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

      Alert.alert(
        "Select Location",
        "Google Maps will open. After selecting your location, please copy the address and return to the app.",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Open Maps",
            onPress: () => Linking.openURL(url),
          },
        ]
      );
    } catch (error) {
      Alert.alert("Error", "Failed to open Google Maps. Please try again.");
      console.error("Maps error:", error);
    }
  };

  // Method 3: Search for a location
  const searchLocation = async (query) => {
    if (!query.trim()) return;

    try {
      setIsLoading(true);
      const results = await Location.geocodeAsync(query);

      if (results.length > 0) {
        const { latitude, longitude } = results[0];

        // Reverse geocode to get full address
        const address = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        if (address.length > 0) {
          const addr = address[0];
          const formattedAddress =
            `${addr.name || ""} ${addr.street || ""}, ${addr.city || ""}, ${addr.region || ""}, ${addr.country || ""}`.trim();
          setSelectedLocation(formattedAddress);
        }
      } else {
        Alert.alert(
          "Not Found",
          "Location not found. Please try a different search term."
        );
      }
    } catch (error) {
      Alert.alert("Error", "Failed to search location. Please try again.");
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const showLocationOptions = () => {
    // Alert.alert(
    //   "Select Location",
    //   "Choose how you want to set your location:",
    //   [
    //     { text: "Cancel", style: "cancel" },
    //     {
    //       text: "Current Location",
    //       onPress: getCurrentLocation,
    //     },
    //     {
    //       text: "Search Location",
    //       onPress: () => {
    //         Alert.prompt(
    //           "Search Location",
    //           "Enter location name or address:",
    //           [
    //             { text: "Cancel", style: "cancel" },
    //             { text: "Search", onPress: searchLocation },
    //           ],
    //           "plain-text"
    //         );
    //       },
    //     },
    //     {
    //       text: "Open Maps",
    //       onPress: openGoogleMapsForLocation,
    //     },
    //   ]
    // );

    setShowAlert(true);
  };

  return (
    <View className="mt-[3%]">
      {/* <Text className="text-lg font-semibold mb-4 text-gray-800">
        Location Picker Demo
      </Text> */}

      <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 mb-4">
        <Ionicons
          name="location-outline"
          size={20}
          color="#666"
          className="mr-2"
        />
        <TextInput
          placeholder="House location"
          value={selectedLocation}
          onChangeText={setSelectedLocation}
          className="flex-1 ml-2 text-gray-800"
          multiline
        />
        <TouchableOpacity
          onPress={showLocationOptions}
          disabled={isLoading}
          className="ml-2 p-1"
        >
          <Ionicons
            name="search-outline"
            size={20}
            color={isLoading ? "#ccc" : "#007AFF"}
          />
        </TouchableOpacity>
      </View>

      {/* {selectedLocation ? (
        <View className="bg-green-50 p-3 rounded-lg mb-4">
          <Text className="text-green-800 font-medium">Selected Location:</Text>
          <Text className="text-green-700 mt-1">{selectedLocation}</Text>
        </View>
      ) : null} */}

      {/* ✅ Custom modal rendered here */}
      {showAlert && (
        <CustomAlert
          visible={showAlert}
          onClose={() => setShowAlert(false)}
          onCurrentLocation={getCurrentLocation}
        />
      )}
      <View className="space-y-2">
        {/* <TouchableOpacity
          onPress={getCurrentLocation}
          disabled={isLoading}
          className="bg-blue-500 px-4 py-3 rounded-lg flex-row items-center justify-center"
        >
          <Ionicons name="location" size={20} color="white" />
          <Text className="text-white font-medium ml-2">
            {isLoading ? "Getting Location..." : "Use Current Location"}
          </Text>
        </TouchableOpacity> */}
        {/* 
        <TouchableOpacity
          onPress={openGoogleMapsForLocation}
          className="bg-green-500 px-4 py-3 rounded-lg flex-row items-center justify-center"
        >
          <Ionicons name="map" size={20} color="white" />
          <Text className="text-white font-medium ml-2">Open Google Maps</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default LocationPicker;
