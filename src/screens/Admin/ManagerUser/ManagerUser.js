import { TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";

import SafeView from "~/components/SafeView";
import UserItem from "./UserItem";
import * as userService from "~/services/userService";
import { useFocusEffect } from "@react-navigation/native";

function ManagerUser() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  const fetch = () => {
    userService
      .getUser()
      .then((user) => {
        setData(user.data);
      })
      .catch((error) => console.log(error));
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

  const onDelete = (id) => {
    userService
      .deleteUser({ id })
      .then((user) => {
        if (user) fetch();
      })
      .catch((error) => console.log(error));
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

export default ManagerUser;
