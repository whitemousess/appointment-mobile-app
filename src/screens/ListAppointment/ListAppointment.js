import { Text } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import SafeView from "~/components/SafeView";
import ListItem from "./ListItem";
import * as appointmentService from "~/services/appointmentService";

function ListAppointment() {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

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

  const onDelete = (id) => {
    appointmentService
      .deleteAppointment({ id })
      .then((res) => {
        if (res) {
          fetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onCancel = (id) => {
    appointmentService
      .cancelAppointment({ id })
      .then((res) => {
        if (res) {
          fetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSuccess = async (id) => {
    appointmentService
      .successAppointment({ id })
      .then((res) => {
        if (res) {
          fetch();
        }
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

  return (
    <SafeView>
      <Text style={{ marginLeft: 10 }}>Lịch hẹn khám</Text>
      <ListItem
        data={data}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onDelete={onDelete}
        onCancel={onCancel}
        onSuccess={onSuccess}
      />
    </SafeView>
  );
}

export default ListAppointment;
