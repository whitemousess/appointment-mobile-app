import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Text } from "react-native";

import ListHistory from "./ListHistory";
import SafeView from "~/components/SafeView";
import * as appointmentService from "~/services/appointmentService";

function History() {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetch = () => {
    appointmentService
      .getHistoryAppointment()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
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
    <SafeView>
      <Text style={{ marginLeft: 10 }}>Lịch sử thăm khám</Text>
      <ListHistory data={data} refreshing={refreshing} onRefresh={onRefresh} />
    </SafeView>
  );
}

export default History;
