import { useRoute } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useContext, useState } from "react";

import SafeView from "~/components/SafeView";
import Header from "./Header";
import RecentPost from "~/components/RecentPost";
import { ScrollView } from "react-native";
import * as recentPostService from "~/services/recentPostService";

function DetailDoctor() {
  const route = useRoute();
  const { data } = route?.params;
  const [dataPost, setDataPost] = useState([]);

  const fetch = () => {
    recentPostService
      .getMyStatus({ id: data._id })
      .then((res) => setDataPost(res.data))
      .catch((err) => console.log(err));
  };

  useFocusEffect(
    useCallback(() => {
      fetch();
    })
  );

  return (
    <SafeView>
      <ScrollView style={{ height: "100%" }}>
        <Header data={data} />
        <RecentPost data={dataPost} />
      </ScrollView>
    </SafeView>
  );
}

export default DetailDoctor;
