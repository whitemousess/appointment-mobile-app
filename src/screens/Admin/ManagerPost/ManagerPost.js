import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View } from "react-native";

import ListItem from "./ListItem";
import SafeView from "~/components/SafeView";
import * as recentPostService from "~/services/recentPostService";

function ManagerPost() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  const fetch = () => {
    recentPostService
      .getAllStatus({})
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = (id) => {
    recentPostService
      .deleteStatus({ id })
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

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <SafeView>
      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        <ListItem
          data={data}
          refreshing={refreshing}
          onRefresh={onRefresh}
          onDelete={onDelete}
        />
      </View>
    </SafeView>
  );
}

export default ManagerPost;
