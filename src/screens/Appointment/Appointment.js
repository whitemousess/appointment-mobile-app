import {
  Image,
  Linking,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import SafeView from "~/components/SafeView";
import doctor from "~/assets/img/doctor.jpg";
import { useNavigation } from "@react-navigation/native";
import { Zocial } from "@expo/vector-icons";
import { useState } from "react";
import HeaderGoBack from "~/components/HeaderGoBack";

function Appointment() {
  const navigation = useNavigation();
  const [chosenDate, setChosenDate] = useState(new Date());
  const [chosenTime, setChosenTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event, newDate) => {
    if (Platform.OS === "android") {
      setShowDatePicker(false);
    }
    if (newDate !== undefined) {
      setChosenDate(newDate);
    }
  };

  const handleTimeChange = (event, newDate) => {
    if (Platform.OS === "android") {
      setShowTimePicker(false);
    } else {
      setShowDatePicker(false);
    }
    if (newDate !== undefined) {
      setChosenTime(newDate);
    }
  };

  const handleCallPress = () => {
    const phoneNumberWithTel = `tel:009999999`;

    Linking.openURL(phoneNumberWithTel).catch((err) =>
      console.error("Không thể mở ứng dụng gọi điện:", err)
    );
  };

  const handleSubmit = () => {
    const time = chosenTime.toLocaleTimeString("vi-vn");
  };

  return (
    <SafeView>
      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        <HeaderGoBack title={"Hẹn lịch khám"}/>
        <ScrollView style={{ height: "100%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={doctor}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginRight: 16,
                }}
              />
              <View>
                <Text style={{ fontWeight: 600 }}>FullName</Text>
                <Text>Tai mũi họng</Text>
              </View>
            </View>
            <TouchableOpacity onPress={handleCallPress} style={{ padding: 20 }}>
              <Zocial name="call" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 10 }}>
            <TouchableOpacity
              onPress={() => {
                setShowDatePicker(!showDatePicker);
                setShowTimePicker(false);
              }}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 20,
                paddingVertical: 16,
              }}
            >
              <Text>
                {chosenDate.toLocaleDateString("vi-vn") || "Chọn ngày khám"}
              </Text>
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                value={chosenDate}
                mode="date"
                display="spinner"
                onChange={handleDateChange}
              />
            )}

            <TouchableOpacity
              onPress={() => {
                setShowTimePicker(!showTimePicker);
                setShowDatePicker(false);
              }}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 20,
                paddingVertical: 16,
                marginVertical: 10,
              }}
            >
              <Text>
                {chosenTime.toLocaleTimeString("vi-vn") || "Chọn giờ khám"}
              </Text>
            </TouchableOpacity>

            {showTimePicker && (
              <DateTimePicker
                value={chosenTime}
                mode="time"
                display="spinner"
                onChange={handleTimeChange}
              />
            )}
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                borderWidth: 1,
                width: "48%",
                paddingVertical: 16,
                borderRadius: 10,
              }}
              onPress={() => navigation.goBack()}
            >
              <Text style={{ textAlign: "center" }}>Hủy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                borderWidth: 1,
                width: "48%",
                marginLeft: 10,
                paddingVertical: 16,
                borderRadius: 10,
                backgroundColor: "#000",
              }}
              onPress={handleSubmit}
            >
              <Text
                style={{ textAlign: "center", color: "#fff", fontWeight: 600 }}
              >
                Lên lịch
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeView>
  );
}

export default Appointment;
