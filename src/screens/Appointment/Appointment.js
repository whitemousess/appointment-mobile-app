import { useCallback, useContext, useEffect, useState } from "react";
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
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Zocial } from "@expo/vector-icons";

import SafeView from "~/components/SafeView";
import HeaderGoBack from "~/components/HeaderGoBack";
import { AuthContext } from "~/shared/AuthProvider";
import * as appointmentService from "~/services/appointmentService";
import Toast from "react-native-toast-message";
import user from "~/assets/img/user.png";

function Appointment() {
  const route = useRoute();
  const navigation = useNavigation();
  const { currentInfo } = useContext(AuthContext);
  const { data } = route.params;

  const [chosenDate, setChosenDate] = useState(new Date());
  const [chosenTime, setChosenTime] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [timeSelect, setTimeSelect] = useState([]);

  const handleDateChange = (event, newDate) => {
    if (Platform.OS === "android") {
      setShowDatePicker(false);
    }
    if (newDate !== undefined) {
      setChosenDate(newDate);
    }
  };

  const handleCallPress = () => {
    const phoneNumberWithTel = `tel:${data.phone}`;

    Linking.openURL(phoneNumberWithTel).catch((err) =>
      console.error("Không thể mở ứng dụng gọi điện:", err)
    );
  };

  const handleSubmit = () => {
    const date = chosenDate.toLocaleDateString("vi-vn");
    const value = {
      time: chosenTime,
      date: date,
      doctorId: data._id,
      currentUserId: currentInfo._id,
    };

    appointmentService
      .newAppointment({ data: value })
      .then((res) => {
        if (res) {
          Toast.show({
            type: "success",
            text1: "Đặt lịch khám thành công",
          });

          fetch();
        }
      })
      .catch((err) => console.log(err));
  };

  const fetch = () => {
    const arrTime = [];
    for (let i = 8; i <= 17; i++) {
      arrTime.push(i + ":00");
    }
    appointmentService
      .getAppointment({
        doctorId: data._id,
        date: chosenDate.toLocaleDateString("vi-vn"),
      })
      .then((res) => {
        const reservedTimes = res.data.map((item) => {
          if (item.status === 0) {
            return item.time;
          }
        });
        const availableTimes = arrTime.filter(
          (time) => !reservedTimes.includes(time)
        );

        setTimeSelect(availableTimes);
        setChosenTime(availableTimes[0]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (chosenDate) {
      fetch();
    }
  }, [chosenDate]);

  return (
    <SafeView>
      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        <HeaderGoBack title={"Hẹn lịch khám"} />
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
                source={data.imageUrl ? { uri: data.imageUrl } : user}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginRight: 16,
                }}
              />
              <View>
                <Text style={{ fontWeight: 600 }}>{data.fullName}</Text>
                <Text>{data.specialist}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={handleCallPress} style={{ padding: 20 }}>
              <Zocial name="call" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text>Chọn ngày thăm khám</Text>
            <TouchableOpacity
              onPress={() => {
                setShowDatePicker(!showDatePicker);
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

            <Text>Chọn giờ thăm khám</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {timeSelect.map((time) => (
                <TouchableOpacity
                  key={time}
                  onPress={() => {
                    setChosenTime(time);
                  }}
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    paddingVertical: 16,
                    width: "45%",
                    margin: 8,
                    backgroundColor: chosenTime == time ? "#ccc" : "#fff",
                  }}
                >
                  <Text style={{ textAlign: "center" }}>{time}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 150,
            }}
          >
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
