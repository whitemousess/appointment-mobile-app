import { Feather } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { TextInput, TouchableOpacity, View } from "react-native";

import SafeView from "~/components/SafeView";
import ListAppointment from "./ListAppointment";
import * as appointmentService from "~/services/appointmentService";
import Toast from "react-native-toast-message";

function ManagerAppointment() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  const fetch = () => {
    appointmentService
      .getAppointment({})
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

  const onDelete = (id) => {
    appointmentService
      .deleteAppointment({ id })
      .then((res) => {
        Toast.show({
          type: "success",
          text1: "Xóa thành công",
        });
        fetch();
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
      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        <ListAppointment
          data={data}
          refreshing={refreshing}
          onRefresh={onRefresh}
          onDelete={onDelete}
        />
      </View>
    </SafeView>
  );
}

export default ManagerAppointment;
