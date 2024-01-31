import { useRoute } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

import SafeView from "~/components/SafeView";
import Header from "./Header";
import RecentPost from "~/components/RecentPost";
import { ScrollView } from "react-native";

function DetailDoctor() {
  const route = useRoute();
  const doctorId = route?.params.doctorId;

  useFocusEffect(
    useCallback(() => {
      console.log(doctorId);
    })
  );

  return (
    <SafeView>
      <ScrollView style={{ height: "100%" }}>
        <Header />
        <RecentPost />
      </ScrollView>
    </SafeView>
  );
}

export default DetailDoctor;
