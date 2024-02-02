import { useCallback, useEffect, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import ItemDoctor from "./ItemDoctor";
import RecentPost from "~/components/RecentPost";
import Doctor from "~/assets/img/doctor.jpg";
import HeaderScreen from "~/components/HeaderScreen";
import * as userService from "~/services/userService";

function Home() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [dataDoctor, setDataDoctor] = useState([]);

  const dataPost = [
    {
      id: 1,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 2,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 3,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 4,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 5,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 6,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 7,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 8,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 9,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 10,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 11,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 12,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
  ];

  const fetch = () => {
    userService
      .getDoctor({})
      .then((doctor) => {
        setDataDoctor(doctor.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetch();
    }, [])
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      fetch();
    }, 1000);
  }, []);

  return (
    <>
      <HeaderScreen />
      <ScrollView
        style={{ height: "100%", marginHorizontal: 6 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Danh sách bác sĩ
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 16,
              paddingVertical: 4,
            }}
            onPress={() => navigation.navigate("ListDoctor")}
          >
            <Text>Tất cả</Text>
          </TouchableOpacity>
        </View>
        
        <ItemDoctor data={dataDoctor} />

        <RecentPost data={dataPost} />
      </ScrollView>
    </>
  );
}

export default Home;
