import { useCallback, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import ListItem from "./ListItem";
import * as userService from "~/services/userService";
import SafeView from "~/components/SafeView";
import { Text } from "react-native";

function ListPredictDiseases() {
  const route = useRoute();

  const [dataDoctor, setDataDoctor] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetch = () => {
    const sickName = route.params?.sickName;
    sickName.map((sick) => {
      userService
        .getDoctorBySickName({ sickName: sick })
        .then((Doctor) => setDataDoctor(Doctor.data))
        .catch((err) => console.log(err));
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
      fetch();
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <SafeView>
      <Text style={{ textAlign: "center", fontSize: 32, fontWeight: 500 }}>
        Kết quả tra cứu
      </Text>
      <ListItem
        data={dataDoctor}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </SafeView>
  );
}

export default ListPredictDiseases;
