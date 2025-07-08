import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  scale,
  verticalScale,
} from "../../../components/adaptive/Adaptiveness";
import HomeTopBar from "../../../components/client/HomeTopBar";
import PromoCard from "../../../components/client/PromoCard";
import ServiceCards from "../../../components/client/ServiceCards";
import PopularServices from "../../../components/client/PopularServices";
import ServiceProvider from "../../../components/client/ServiceProvider";

// ../../../../../assets/images/home/bytesize_location.png
// ../../../../../assets/images/home/DP.png
export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");
  const [showRecentSearches, setShowRecentSearches] = useState(false);
  const recentSearches = [
    { id: "1", term: "Plumber", results: 232 },
    { id: "2", term: "Cloth washer", results: 112 },
    { id: "3", term: "Electrical Repairs", results: 12 },
    { id: "4", term: "House Cleaning", results: 76 },
    { id: "5", term: "Appliance Maintenance", results: 87 },
  ];
  // Handle text input change
  const handleSearchChange = (text) => {
    setSearchText(text);

    // Show recent searches when user starts typing
    if (text.length > 0) {
      setShowRecentSearches(true);
    } else {
      setShowRecentSearches(false);
    }
  };
  // Handle when user selects a recent search
  const handleRecentSearchSelect = (searchTerm) => {
    setSearchText(searchTerm);
    setShowRecentSearches(false);
    // Here you can trigger your search function
    performSearch(searchTerm);
  };
  // Handle search focus
  const handleSearchFocus = () => {
    if (searchText.length > 0) {
      setShowRecentSearches(true);
    }
  };
  // Handle search blur (when user clicks outside)
  const handleSearchBlur = () => {
    // Small delay to allow recent search selection
    setTimeout(() => {
      setShowRecentSearches(false);
    }, 200);
  };
  // Clear recent searches
  const clearRecentSearches = () => {
    // Here you can clear from your storage/state
    console.log("Clear recent searches");
  };
  // Your search function
  const performSearch = (term) => {
    console.log("Searching for:", term);
    // Implement your search logic here
  };
  // Filter recent searches based on current input
  const filteredRecentSearches = recentSearches.filter((item) =>
    item.term.toLowerCase().includes(searchText.toLowerCase())
  );
  const renderRecentSearchItem = ({ item }) => (
    <TouchableOpacity
      style={styles.recentSearchItem}
      onPress={() => handleRecentSearchSelect(item.term)}
    >
      <Text style={styles.recentSearchTerm}>{item.term}</Text>
      <Text style={styles.recentSearchResults}>{item.results} results</Text>
    </TouchableOpacity>
  );
  return (
    <View className="flex-1  bg-[#F9FAFB]">
      <HomeTopBar />
      <PromoCard
        searchText={searchText}
        handleSearchChange={handleSearchChange}
        handleSearchFocus={handleSearchFocus}
        handleSearchBlur={handleSearchBlur}
        showRecentSearches={showRecentSearches}
        filteredRecentSearches={filteredRecentSearches}
        handleRecentSearchSelect={handleRecentSearchSelect}
        clearRecentSearches={clearRecentSearches}
        renderRecentSearchItem={renderRecentSearchItem}
      />
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#f8f9fa",
  },
  recentSearchesContainer: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    maxHeight: 300, // Limit height so it doesn't take full screen
  },
  recentSearchesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  recentSearchesTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  clearButton: {
    color: "#007AFF",
    fontSize: 14,
  },
  recentSearchesList: {
    maxHeight: 250,
  },
  recentSearchItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0", 
    borderWidth:1,
    borderColor:'#000',
    height:130, 
    width:130,
  },
  recentSearchTerm: {
    fontSize: 16,
    color: "#333",
  },
  recentSearchResults: {
    fontSize: 14,
    color: "#666",
  },
});
