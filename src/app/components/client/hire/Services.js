import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { scale } from "../../adaptive/Adaptiveness";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// Updated ServiceItem component with navigation
const ServiceItem = ({ item, navigation }) => {
  const serviceColors = {
    "TV repair and Installation": "bg-[#319FCA]",
    "AC Repair and Maintenance": "bg-[#FF6B6B]",
    "Plumbing Services": "bg-[#10B981]",
    "Electrical Repair": "bg-[#8B5CF6]",
  };

  const handleServicePress = () => {
    // Navigate to details screen with service data
    navigation.navigate("JobProviderInfoScreen", {
      serviceData: item,
    });
  };

  return (
    <View className="mx-[4%] mb-[4%]">
      {/* Service Type Banner - Made clickable */}
      <TouchableOpacity
        onPress={handleServicePress}
        style={{
          borderTopLeftRadius: scale(8),
          borderTopRightRadius: scale(8),
        }}
        className={`px-[3.5%] py-[3%] flex-row items-center justify-between ${
          serviceColors[item?.serviceType] || "bg-gray-500"
        }`}
      >
        <Text className="text-white font-poppins-400regular text-base">
          {item.serviceType}
        </Text>
        <TouchableOpacity onPress={handleServicePress}>
          <Ionicons name="arrow-forward" size={16} color="#fff" />
        </TouchableOpacity>
      </TouchableOpacity>

      <View
        style={{
          borderBottomRightRadius: scale(8),
          borderBottomLeftRadius: scale(8),
        }}
        className="px-[4%] py-[4%] border border-[#DCDCDC] rounded-sm bg-white"
      >
        <View className="flex-row items-center gap-[4%]">
          {/* Profile Image */}
          <View className="w-16 h-16 mb-[4%] rounded-full bg-blue-500 items-center justify-center">
            <Image
              source={{
                uri: item.profileImage,
              }}
              className="w-full h-full rounded-full"
              resizeMode="cover"
            />
          </View>

          {/* Provider Details */}
          <View className="flex-1">
            <Text className="font-poppins-500medium text-xl text-gray-800 mb-1">
              {item.providerName}
            </Text>

            {/* Rating */}
            <View className="flex-row items-center mb-[2%]">
              <Text className="text-[#F59E0B] font-poppins-400regular text-xs mr-1">
                ★ {item.rating}
              </Text>
              <Text className="font-poppins-400regular text-[#18649F] text-xs">
                ({item.reviews} Reviews)
              </Text>
            </View>

            {/* Price and Time */}
            <View className="flex-row justify-between">
              <Text className="font-poppins-400regular text-base text-[#1F2937]">
                Price
              </Text>
              <Text className="text-[#F59E0B] text-base font-poppins-semiBold">
                {item.price}
              </Text>
            </View>

            <View className="flex-row justify-end w-full">
              <Text className="text-gray-500 text-sm">{item.timeAgo}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// Updated Services component with navigation prop
export default function Services() {
  const navigation = useNavigation();
  const servicesData = [
    {
      id: 1,
      serviceType: "TV repair and Installation",
      designation: "TV Technician",
      providerName: "Jackson",
      description: "Expert in fixing and installing all types of TVs.",
      rating: 4.8,
      reviews: 8,
      price: "$320",
      timeAgo: "14 m Ago",
      bookingDate: "2025-07-16",
      bookingHours: "10:00 AM - 12:00 PM",
      specializations: ["LED TV", "Smart TV", "Wall Mount Installation"],
      address: "123 Green Street, Los Angeles, CA",
      profileImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      serviceType: "AC Repair and Maintenance",
      designation: "AC Technician",
      providerName: "Michael",
      description: "Reliable AC servicing to keep you cool year-round.",
      rating: 4.9,
      reviews: 12,
      price: "$280",
      timeAgo: "25 m Ago",
      bookingDate: "2025-07-17",
      bookingHours: "2:00 PM - 4:00 PM",
      specializations: [
        "Split AC",
        "Window AC",
        "Gas Refilling",
        "Filter Cleaning",
      ],
      address: "456 Maple Avenue, New York, NY",
      profileImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      serviceType: "Plumbing Services",
      designation: "Plumber",
      providerName: "Sarah",
      description: "Fast and affordable plumbing solutions for your home.",
      rating: 4.7,
      reviews: 15,
      price: "$150",
      timeAgo: "1 h Ago",
      bookingDate: "2025-07-18",
      bookingHours: "11:00 AM - 1:00 PM",
      specializations: [
        "Leak Repair",
        "Bathroom Fittings",
        "Pipe Installation",
      ],
      address: "789 Oak Lane, Chicago, IL",
      profileImage:
        "https://images.unsplash.com/photo-1494790108755-2616b2e36943?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 4,
      serviceType: "Electrical Repair",
      designation: "Electrician",
      providerName: "David",
      description: "Skilled in handling all kinds of electrical issues.",
      rating: 4.6,
      reviews: 7,
      price: "$200",
      timeAgo: "2 h Ago",
      bookingDate: "2025-07-19",
      bookingHours: "3:00 PM - 5:00 PM",
      specializations: [
        "Wiring",
        "Switchboard Fixing",
        "Fan & Light Installation",
      ],
      address: "101 Sunset Blvd, Houston, TX",
      profileImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 5,
      serviceType: "Appliance Repair",
      designation: "Appliance Technician",
      providerName: "Emma",
      description: "Repairs for all major household appliances at fair prices.",
      rating: 4.9,
      reviews: 20,
      price: "$180",
      timeAgo: "3 h Ago",
      bookingDate: "2025-07-20",
      bookingHours: "9:00 AM - 11:00 AM",
      specializations: ["Washing Machine", "Microwave Oven", "Refrigerator"],
      address: "202 Lakeview Drive, San Francisco, CA",
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const renderServiceItem = ({ item }) => {
    return <ServiceItem item={item} navigation={navigation} />;
  };

  return (
    <View className="mb-[18%]">
      <FlatList
        data={servicesData}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: scale(16),
          paddingBottom: scale(20),
        }}
      />
    </View>
  );
}
