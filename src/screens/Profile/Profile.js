import { RefreshControl, ScrollView, Text, View } from "react-native";
import { useCallback, useContext, useState } from "react";
import { AuthContext } from "~/Common/AuthProvider";
import { useFocusEffect } from "@react-navigation/native";

import SafeView from "~/components/SafeView";
import Header from "./Header";
import RecentPost from "~/components/RecentPost";
import ButtonPost from "~/components/PostStatus/ButtonPost";
import * as recentPostService from "~/services/recentPostService";

function Profile() {
  const { currentInfo } = useContext(AuthContext);
  const [dataPost, setDataPost] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetch = () => {
    recentPostService
      .getMyStatus({ id: currentInfo._id })
      .then((res) => setDataPost(res.data))
      .catch((err) => console.log(err));
  };

  useFocusEffect(useCallback(() => fetch(), []));

  const refreshData = () => {
    fetch();
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      fetch();
    }, 1000);
  }, []);

  return (
    <SafeView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Header data={currentInfo} />
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
    </SafeView>
  );
}

export default Profile;
