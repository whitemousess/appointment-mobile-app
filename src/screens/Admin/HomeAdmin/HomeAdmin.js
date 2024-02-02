import {
  AntDesign,
  Entypo,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import * as userService from "~/services/userService";

function HomeAdmin() {
  const navigation = useNavigation();
  const [totalDoctor, setTotalDoctor] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const fetch = () => {
    userService
      .getDoctor()
      .then((res) => {
        setTotalDoctor(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });

    userService
      .getUser()
      .then((res) => {
        setTotalUser(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      fetch();
    }, 1000);
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <ScrollView
      style={{ marginHorizontal: 10, marginTop: 10 }}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate("DoctorStack")}
        style={{
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#DBE7C9",
          borderRadius: 20,
          borderWidth: 1,
          marginVertical: 6,
          paddingVertical: 45,
        }}
      >
        <FontAwesome6 name="user-doctor" size={50} color="black" />
        <Text style={{ marginTop: 10, fontSize: 16 }}>
          {totalDoctor} bác sĩ
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate("ManagerUser")}
        style={{
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#F8F4EC",
          marginVertical: 6,
          paddingVertical: 45,
          borderRadius: 20,
          borderWidth: 1,
        }}
      >
        <Entypo name="user" size={50} color="black" />
        <Text style={{ marginTop: 10, fontSize: 16 }}>
          {totalUser} người dùng
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate("ManagerAppointment")}
        style={{
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#F8F4EC",
          marginVertical: 6,
          paddingVertical: 45,
          borderRadius: 20,
          borderWidth: 1,
        }}
      >
        <AntDesign name="calendar" size={50} color="black" />
        <Text style={{ marginTop: 10, fontSize: 16 }}>32 lịch hẹn</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate("ManagerPost")}
        style={{
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#F8F4EC",
          marginVertical: 6,
          paddingVertical: 45,
          borderRadius: 20,
          borderWidth: 1,
        }}
      >
        <MaterialCommunityIcons name="bird" size={50} color="black" />
        <Text style={{ marginTop: 10, fontSize: 16 }}>32 bài viết</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default HomeAdmin;
