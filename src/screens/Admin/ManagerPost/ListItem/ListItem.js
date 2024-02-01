import { FlatList, RefreshControl } from "react-native";
import Item from "./Item";

function ListItem({ data, refreshing, onRefresh }) {
  const renderItem = (item) => {
    return <Item data={item} />;
  };

  return (
    <FlatList
      style={{ height: "100%" }}
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
