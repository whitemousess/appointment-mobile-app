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
  const [search, setSearch] = useState("");

  const fetch = () => {
    userService
      .getUser({ fullName: search })
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

  const handleSearch = (text) => {
    setSearch(text);
  };

  useFocusEffect(
    useCallback(() => {
      fetch();
    }, [search])
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
            value={search}
            onChangeText={handleSearch}
          />
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
