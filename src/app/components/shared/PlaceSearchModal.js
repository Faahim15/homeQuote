import React from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";

const PlaceSearchModal = ({ route }) => {
  const navigation = useNavigation();
  const { onLocationSelect } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search for a place"
        onPress={(data, details = null) => {
          const address = data.description;
          onLocationSelect(address); // callback
          navigation.goBack(); // close the modal/screen
        }}
        fetchDetails={true}
        query={{
          key: "API_KEY", // replace with your key
          language: "en",
        }}
      />
    </View>
  );
};

export default PlaceSearchModal;
