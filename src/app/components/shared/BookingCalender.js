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
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 h-[80%]   px-4 py-6">
        {/* Header */}
        {/* <View className="flex-row items-center mb-6">
          <TouchableOpacity className="mr-4">
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold text-gray-900">Book Jackson</Text>
        </View> */}

        {/* Date Selection */}
        <View className="flex-1 mb-8 border  border-green-500 ">
          <Text className="text-lg font-medium text-gray-900 mb-4">
            Select Date
          </Text>

          <View className="bg-gray-50 flex-1  border  border-green-500 h-[80%]  rounded-lg overflow-hidden">
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
          <View className="mb-6 p-4 bg-blue-50 rounded-lg">
            <Text className="text-blue-800 font-medium">
              Selected: {selectedDate}
            </Text>
          </View>
        )}

        {/* Time Selection - Only show if date is selected */}
        {selectedDate && (
          <View className="mb-8 border border-red-600 ">
            <Text className="text-lg font-medium text-gray-900 mb-4">
              Select Time
            </Text>

            {/* AM Times */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-600 mb-3">AM</Text>
              <View className="flex-row flex-wrap gap-2">
                {amTimes.map((time) => (
                  <TouchableOpacity
                    key={time}
                    onPress={() => setSelectedTime(time)}
                    className={`px-4 py-3 rounded-lg border ${
                      selectedTime === time
                        ? "bg-blue-500 border-blue-500"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <Text
                      className={`text-sm font-medium ${
                        selectedTime === time ? "text-white" : "text-gray-700"
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
              <Text className="text-sm font-medium text-gray-600 mb-3">PM</Text>
              <View className="flex-row flex-wrap gap-2">
                {pmTimes.map((time) => (
                  <TouchableOpacity
                    key={time}
                    onPress={() => setSelectedTime(time)}
                    className={`px-4 py-3 rounded-lg border ${
                      selectedTime === time
                        ? "bg-blue-500 border-blue-500"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <Text
                      className={`text-sm font-medium ${
                        selectedTime === time ? "text-white" : "text-gray-700"
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
      <View className="px-4">
        <TouchableOpacity
          className={`py-4 rounded-lg ${
            selectedDate && selectedTime ? "bg-blue-600" : "bg-gray-300"
          }`}
          onPress={handleSave}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BookingCalendar;
