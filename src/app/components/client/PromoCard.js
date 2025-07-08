
import { View, Text, TextInput, Image, TouchableOpacity,StyleSheet,FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../adaptive/Adaptiveness";
import { XStyle } from "../../constants/ReusableFunction";

export default function PromoCard({searchText,
        handleSearchChange,
        handleSearchFocus,
        handleSearchBlur,
        showRecentSearches,
        filteredRecentSearches,
        handleRecentSearchSelect,
        clearRecentSearches,
        renderRecentSearchItem}) { 
 

  return (
    <View className="mx-[6.4%]  w-[87%]  mt-[3%] ">
      {/* Main Promo Card with Gradient Background */}
      <LinearGradient
        colors={["#319FCA", "#18649F"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="rounded-md overflow-hidden relative"
      >
        <View className="flex-row overflow-visible ">
          {/* Left Content */}
          <View className="flex-1 px-[6%] overflow-visible py-6 justify-center">
            <Text className="text-white font-poppins-bold text-2xl  mb-[0.5%]">
              Get 30% off
            </Text>
            <Text className="text-white text-sm  font-poppins-500medium">
              Just by Booking Home{"\n"}Services
            </Text>
          </View>

          {/* Right Image */}
          <View
            style={{
              width: scale(120),
              height: verticalScale(120),
              position: "absolute",
              right: scale(20),
              top: verticalScale(-10),
            }}
          >
            <Image
              source={require("../../../../assets/images/home/cover.png")}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Search Bar */}
        <View className=" ">
          <View
            style={[XStyle.lightShadow]}
            className="bg-white  flex-row rounded-md items-center px-[3%] py-[3%]"
          >
            <Ionicons name="search" size={24} color="#6B7280" />
            <TextInput
              placeholder="Search here..."
              placeholderTextColor="#898989"
              className="flex-1 ml-[2%]  font-poppins-400regular"
              color="#000" 
             
             value={searchText} 
             onChangeText={handleSearchChange}
             onFocus={handleSearchFocus}
             onBlur={handleSearchBlur}
            />
            <Ionicons name="options-outline" size={24} color="#6B7280" /> 
              
          </View>
        </View>
      </LinearGradient>
       {/* Recent Searches Dropdown */}
                  {showRecentSearches && (
                    <View style={styles.recentSearchesContainer}>
                      <View style={styles.recentSearchesHeader}>
                        <Text style={styles.recentSearchesTitle}>Recent Searches</Text>
                        <TouchableOpacity onPress={clearRecentSearches}>
                          <Text style={styles.clearButton}>Clear</Text>
                        </TouchableOpacity>
                      </View>
            
                      <FlatList
                        data={filteredRecentSearches}
                        renderItem={renderRecentSearchItem}
                        keyExtractor={(item) => item.id}
                        style={styles.recentSearchesList}
                        keyboardShouldPersistTaps="handled"
                      />
                    </View>
                  )}
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
    height:200,  
    color:'#000',
    width:200,
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
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