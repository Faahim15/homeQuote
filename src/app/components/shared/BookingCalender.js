import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import { Calendar } from "react-native-calendars";
// import { ArrowLeft } from 'lucide-react-native';

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Simple time slots
  const amTimes = ["09:00", "10:00", "11:00", "12:00"];
  const pmTimes = [
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
  ];

  // Handle date selection
  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    setSelectedTime(""); // Reset time when date changes
  };

  // Handle save
  const handleSave = () => {
    if (!selectedDate || !selectedTime) {
      Alert.alert("Error", "Please select both date and time");
      return;
    }

    Alert.alert(
      "Booking Confirmed",
      `Date: ${selectedDate}\nTime: ${selectedTime}`,
      [{ text: "OK", onPress: () => console.log("Booking saved") }]
    );
  };

  // Get today's date for minDate
  const today = new Date().toISOString().split("T")[0];

  // Calendar theme
  const calendarTheme = {
    selectedDayBackgroundColor: "#3b82f6",
    selectedDayTextColor: "#ffffff",
    todayTextColor: "#3b82f6",
    dayTextColor: "#111827",
    textDisabledColor: "#d1d5db",
    arrowColor: "#6b7280",
    monthTextColor: "#111827",
    textDayFontWeight: "400",
    textMonthFontWeight: "600",
    textDayFontSize: 16,
    textMonthFontSize: 16,
  };

  // Mark selected date
  const markedDates = selectedDate
    ? {
        [selectedDate]: {
          selected: true,
          selectedColor: "#3b82f6",
        },
      }
    : {};

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]">
      <ScrollView className="flex-1 ">
        {/* Date Selection */}
        <View className="flex-1 mb-8 mt-[3%] ">
          <Text className="font-poppins-semiBold text-base text-[#1F2937]">
            Select Date
          </Text>

          <View className="bg-white flex-1 mt-[2%] border border-[#D4E0EB]  rounded-lg overflow-hidden">
            <Calendar
              current={today}
              onDayPress={onDayPress}
              markedDates={markedDates}
              minDate={today}
              theme={calendarTheme}
              enableSwipeMonths={true}
              hideExtraDays={true}
              firstDay={0}
              style={{
                borderRadius: 8,
                paddingBottom: 10,
              }}
            />
          </View>
        </View>

        {/* Show selected date */}
        {selectedDate && (
          <View className="mb-6 p-4 bg-white rounded-lg">
            <Text className="text-blue-800 font-poppins-500medium">
              Selected: {selectedDate}
            </Text>
          </View>
        )}

        {/* Time Selection - Only show if date is selected */}
        {selectedDate && (
          <View className="mb-[9%] ">
            <Text className="font-poppins-semiBold text-base text-[#565656]">
              Select Time
            </Text>

            {/* AM Times */}
            <View className="mb-[2%]">
              <Text className="text-sm font-poppins-400regular text-[#565656] mb-[1.5%]">
                AM
              </Text>
              <View className="flex-row flex-wrap gap-2">
                {amTimes.map((time) => (
                  <TouchableOpacity
                    key={time}
                    onPress={() => setSelectedTime(time)}
                    className={`px-4 py-3 rounded-lg border ${
                      selectedTime === time
                        ? "bg-[#319FCA] border-[#319FCA]"
                        : "bg-white font-poppins-500medium  border-[#D4E0EB]"
                    }`}
                  >
                    <Text
                      className={`text-sm font-poppins-500medium ${
                        selectedTime === time ? "text-white" : "text-[#175994]"
                      }`}
                    >
                      {time}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* PM Times */}
            <View>
              <Text className="text-sm font-poppins-400regular text-[#565656] mb-[1.5%]">
                PM
              </Text>
              <View className="flex-row flex-wrap gap-2">
                {pmTimes.map((time) => (
                  <TouchableOpacity
                    key={time}
                    onPress={() => setSelectedTime(time)}
                    className={`px-4 py-3 rounded-lg border ${
                      selectedTime === time
                        ? "bg-[#319FCA] border-[#319FCA]"
                        : "bg-white font-poppins-500medium  border-[#D4E0EB]"
                    }`}
                  >
                    <Text
                      className={`text-sm font-medium ${
                        selectedTime === time ? "text-white" : "text-[#175994]"
                      }`}
                    >
                      {time}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        )}
      </ScrollView>
      {/* Save Button */}
      <View className="">
        <TouchableOpacity
          className={`py-[3.5%] rounded-lg ${
            selectedDate && selectedTime ? "bg-[#175994]" : "bg-gray-300"
          }`}
          onPress={handleSave}
        >
          <Text className="text-white text-center font-poppins-bold text-base">
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BookingCalendar;
