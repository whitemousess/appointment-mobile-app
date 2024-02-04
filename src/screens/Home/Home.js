import { useCallback, useContext, useEffect, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { AuthContext } from "~/shared/AuthProvider";
import ItemDoctor from "./ItemDoctor";
import RecentPost from "~/components/RecentPost";
import HeaderScreen from "~/components/HeaderScreen";
import ButtonPost from "~/components/PostStatus/ButtonPost";

import * as userService from "~/services/userService";
import * as recentPostService from "~/services/recentPostService";

function Home() {
  const { currentInfo } = useContext(AuthContext);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [dataDoctor, setDataDoctor] = useState([]);
  const [dataPost, setDataPost] = useState([]);

  const fetch = () => {
    userService
      .getDoctor({})
      .then((doctor) => {
        setDataDoctor(doctor.data);
      })
      .catch((error) => {
        console.log(error);
      });

    recentPostService
      .getAllStatus()
      .then((status) => {
        setDataPost(status.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const refreshData = () => {
    fetch();
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

        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 10,
              borderTopWidth: 1,
              borderColor: "#ccc",
              paddingTop: 10,
            }}
          >
            Bài viết
          </Text>
          {currentInfo.role === 1 && <ButtonPost refreshData={refreshData} />}
        </View>

        <RecentPost data={dataPost} />
      </ScrollView>
    </>
  );
}

export default Home;
