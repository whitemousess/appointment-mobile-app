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
  const [search, setSearch] = useState("");

  const fetch = () => {
    userService
      .getDoctor({ fullName: search })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const handleSearch = (text) => {
    setSearch(text);
  };

  useFocusEffect(
    useCallback(() => {
      fetch();
    }, [search])
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

export default ManagerDoctor;
