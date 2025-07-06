import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const serviceData = [
  {
    id: "1",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dbNn4ns7rEqRFeDPZ9VWhzD0Hbszn4.png",
    title: "Wallpaper on drawing room",
    author: "Amand Herlen",
    service: "Painting/Indoor Painting",
    location: "Baker Street",
    time: "2hrs ago",
  },
  {
    id: "2",
    image: "/placeholder.svg?height=200&width=300",
    title: "Kitchen Cabinet Renovation",
    author: "Sarah Johnson",
    service: "Carpentry/Kitchen Work",
    location: "Oak Avenue",
    time: "4hrs ago",
  },
  {
    id: "3",
    image: "/placeholder.svg?height=200&width=300",
    title: "Bathroom Tile Installation",
    author: "Mike Chen",
    service: "Tiling/Bathroom",
    location: "Pine Street",
    time: "6hrs ago",
  },
  {
    id: "4",
    image: "/placeholder.svg?height=200&width=300",
    title: "Living Room Lighting Setup",
    author: "Emma Davis",
    service: "Electrical/Lighting",
    location: "Maple Drive",
    time: "8hrs ago",
  },
  {
    id: "5",
    image: "/placeholder.svg?height=200&width=300",
    title: "Garden Landscaping",
    author: "Tom Wilson",
    service: "Gardening/Outdoor",
    location: "Rose Garden",
    time: "1 day ago",
  },
  {
    id: "6",
    image: "/placeholder.svg?height=200&width=300",
    title: "Floor Polishing Service",
    author: "Lisa Brown",
    service: "Cleaning/Floor Care",
    location: "Cedar Lane",
    time: "1 day ago",
  },
  {
    id: "7",
    image: "/placeholder.svg?height=200&width=300",
    title: "Window Blind Installation",
    author: "David Lee",
    service: "Installation/Windows",
    location: "Birch Road",
    time: "2 days ago",
  },
];

const ServiceCard = ({ item }) => {
  return (
    <TouchableOpacity className="bg-white py-[4%] px-[3%]  rounded-xl my-[1%] shadow-sm overflow-hidden">
      {/* Card Image */}
      <View className="w-[280px] h-[160px]">
        <Image
          source={require("../../../../assets/images/home/jobImg.png")}
          className="w-full h-full rounded-md "
          resizeMode="cover"
        />
      </View>

      {/* Card Content */}
      <View className="px-[4%] py-[3%]">
        {/* Title */}
        <Text
          className="text-gray-900 font-semibold text-base mb-[2%]"
          numberOfLines={2}
        >
          {item.title}
        </Text>

        {/* Author */}
        <View className="flex-row items-center mb-[2%]">
          <Image
            source={require("../../../../assets/images/home/Avatar.png")}
            className="w-6 h-6 bg-gray-300 rounded-full mr-[2%]"
          />
          <Text className="font-poppins-400regular text-sm">
            by{" "}
            <Text className="font-poppins-400regular text-[#319FCA] text-sm ">
              {item.author}
            </Text>
          </Text>
        </View>

        {/* Service Type */}
        <View className="flex-row gap-[2%] items-center mb-[2%]">
          <Ionicons name="construct-outline" size={16} color="#6B7280" />
          <Text className="font-poppins-400regular text-sm text-[#6B7280] ">
            {item.service}
          </Text>
        </View>

        {/* Location and Time */}
        <View className="flex-row items-center">
          <Ionicons name="location-outline" size={16} color="#319FCA" />
          <Text className="text-gray-500 text-sm ml-[1%]"></Text>

          <Text className="font-poppins-400regular text-sm text-[#319FCA] ">
            {item.location}{" "}
            <Text className="text-[#6B7280]">| {item.time}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function ServiceCards() {
  return (
    <View className="mx-[1%] ">
      <FlatList
        data={serviceData}
        renderItem={({ item }) => <ServiceCard item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: "4%", // Increased padding to show peek better
        }}
        // snapToInterval={264} // Adjusted: 260 (card width) + 4 (margins)
        // // decelerationRate="fast"
        snapToAlignment="start" // Ensures proper snapping alignment
      />
    </View>
  );
}
