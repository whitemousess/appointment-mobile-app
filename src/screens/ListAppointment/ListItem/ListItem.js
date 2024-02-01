import { FlatList, RefreshControl } from "react-native";
import { useCallback, useState } from "react";

import Item from "./Item";

function ListItem({ data }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  const renderItem = (item) => {
    return <Item data={item} />;
  };

  return (
    <FlatList
      style={{ height: "100%", marginHorizontal: 10, marginTop: 10 }}
      data={data}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item.id}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}

export default ListItem;
