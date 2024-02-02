import { Text } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import SafeView from "~/components/SafeView";
import ListItem from "./ListItem";
import * as appointmentService from "~/services/appointmentService";

function ListAppointment() {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetch = () => {
    appointmentService
      .getMyAppointment()
      .then((res) => {
        setData(res.data);
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

  useFocusEffect(
    useCallback(() => {
      fetch();
    }, [])
  );

  return (
    <SafeView>
      <Text style={{ marginLeft: 10 }}>Lịch hẹn khám</Text>
      <ListItem data={data} refreshing={refreshing} onRefresh={onRefresh} />
    </SafeView>
  );
}

export default ListAppointment;
