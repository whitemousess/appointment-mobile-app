import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Text } from "react-native";

import ListHistory from "./ListHistory";
import SafeView from "~/components/SafeView";
import * as appointmentService from "~/services/appointmentService";
import Toast from "react-native-toast-message";

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

  const onCancel = (id) => {
    appointmentService
      .cancelAppointment({ id })
      .then((res) => {
        if (res) {
          Toast.show({
            type: "success",
            text1: `Hủy hẹn thành công cuộc hẹn`,
          });
          fetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = (id) => {
    appointmentService
      .deleteAppointment({ id })
      .then((res) => {
        if (res) {
          Toast.show({
            type: "success",
            text1: `Xóa thành công cuộc hẹn`,
          });
          fetch();
        }
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

  return (
    <SafeView>
      <Text style={{ marginLeft: 10 }}>Lịch sử thăm khám</Text>
      <ListHistory
        data={data}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onCancel={onCancel}
        onDelete={onDelete}
      />
    </SafeView>
  );
}

export default History;
