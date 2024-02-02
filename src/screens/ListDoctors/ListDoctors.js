import { useCallback, useEffect, useState } from "react";
import { StatusBar, TextInput, TouchableOpacity, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import HeaderScreen from "~/components/HeaderScreen";
import ListItem from "./ListItem";
import Diseases from "./Diseases";
import * as userService from "~/services/userService";
import { Feather } from "@expo/vector-icons";

function ListDoctors() {
  const [visibleHeader, setVisibleHeader] = useState(false);
  const [dataDoctor, setDataDoctor] = useState([]);
  const [specialistSelected, setSpecialistSelected] = useState("");
  const [more, setMore] = useState(10);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const fetch = () => {
    userService
      .getDoctor({
        perPage: more,
        specialist: specialistSelected,
        fullName: search,
      })
      .then((doctor) => {
        setDataDoctor(doctor.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoadMore = () => {
    setMore(more + 10);
  };

  const handleSearch = (text) => {
    setSearch(text);
  };

  useFocusEffect(
    useCallback(() => {
      fetch();
    }, [specialistSelected, more, search])
  );

  const onScroll = (e) => {
    const location = e.nativeEvent.contentOffset.y;
    if (location > 130) {
      setVisibleHeader(true);
    } else {
      setVisibleHeader(false);
    }
  };

  const onFilter = (value) => {
    setSpecialistSelected(value);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setSpecialistSelected("");
      setSearch("");
      setMore(10);
      fetch();
    }, 1000);
  }, []);

  return (
    <View
      style={{
        marginBottom: visibleHeader && StatusBar.currentHeight + 150,
      }}
    >
      {!visibleHeader && <HeaderScreen />}
      <TextInput
        placeholder="Tìm kiếm theo tên ..."
        style={{
          paddingVertical: 16,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          marginTop: 20,
          marginHorizontal: 10,
        }}
        value={search}
        onChangeText={handleSearch}
      />
      <View
        style={{
          paddingTop: visibleHeader && StatusBar.currentHeight,
          borderBottomWidth: 1,
          borderColor: "#ccc",
          marginHorizontal: 10,
        }}
      >
        <Diseases onFilter={onFilter} />
      </View>

      <ListItem
        onScroll={onScroll}
        handleLoadMore={handleLoadMore}
        data={dataDoctor}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
}

export default ListDoctors;
