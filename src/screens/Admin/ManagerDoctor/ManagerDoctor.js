import { TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useCallback, useState, useEffect } from "react";

import SafeView from "~/components/SafeView";
import UserItem from "./UserItem";
import * as userService from "~/services/userService";
import { useFocusEffect } from "@react-navigation/native";

function ManagerDoctor() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  const fetch = () => {
    userService
      .getDoctor()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
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

  const onDelete = (id) => {
    userService
      .deleteUser({ id })
      .then((res) => {
        if (res) fetch();
      })
      .catch((err) => console.log(err));
  };

  return (
    <SafeView>
      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
            marginTop: 10,
            paddingHorizontal: 4,
          }}
        >
          <TextInput
            placeholder="Tìm kiếm theo tên ..."
            style={{ paddingVertical: 10, paddingHorizontal: 10 }}
          />
          <TouchableOpacity
            activeOpacity={1}
            style={{
              backgroundColor: "#000",
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 10,
            }}
          >
            <Feather name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <UserItem
          data={data}
          refreshing={refreshing}
          onRefresh={onRefresh}
          onDelete={onDelete}
        />
      </View>
    </SafeView>
  );
}

export default ManagerDoctor;
