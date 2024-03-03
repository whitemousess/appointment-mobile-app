import { useCallback, useEffect, useState } from "react";
import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import HeaderScreen from "~/components/HeaderScreen";
import ListItem from "./ListItem";
import Diseases from "./Diseases";
import * as userService from "~/services/userService";
import { AntDesign } from "@expo/vector-icons";

function ListDoctors() {
  const navigation = useNavigation();
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
        setDataDoctor(doctor.data);
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
    if (location > 50) {
      setVisibleHeader(true);
    } else if (location === 0) {
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
        marginBottom: (visibleHeader && StatusBar.currentHeight + 170) || 200,
      }}
    >
      {!visibleHeader && (
        <>
          <HeaderScreen />
          <TextInput
            placeholder="Tìm kiếm theo tên ..."
            style={{
              paddingVertical: 16,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 10,
              marginHorizontal: 10,
              marginTop: 10,
            }}
            value={search}
            onChangeText={handleSearch}
          />
        </>
      )}

      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "#ccc",
          marginTop: !visibleHeader ? 10 : StatusBar.currentHeight || 20,
          marginHorizontal: 10,
        }}
      >
        <Diseases onFilter={onFilter} selected={specialistSelected} />
      </View>

      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#AAD7D9",
            width: "100%",
            paddingVertical: 24,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate('PredictDiseases')}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              marginRight: 10,
            }}
          >
            Chẩn đoán theo bệnh
          </Text>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
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
