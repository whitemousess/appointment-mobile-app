import { useRoute } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useContext } from "react";

import SafeView from "~/components/SafeView";
import Header from "./Header";
import RecentPost from "~/components/RecentPost";
import { ScrollView } from "react-native";
import { AuthContext } from "~/shared/AuthProvider";

function DetailDoctor() {
  const route = useRoute();
  const { data } = route.params;

  useFocusEffect(
    useCallback(() => {
      console.log(data);
    })
  );

  return (
    <SafeView>
      <ScrollView style={{ height: "100%" }}>
        <Header data={data} />
        <RecentPost />
      </ScrollView>
    </SafeView>
  );
}

export default DetailDoctor;
