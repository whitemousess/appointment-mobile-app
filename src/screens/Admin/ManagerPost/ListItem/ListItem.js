import { FlatList, RefreshControl } from "react-native";
import Item from "./Item";

function ListItem({ data, refreshing, onRefresh, onDelete }) {
  const renderItem = (item) => {
    return <Item data={item} onDelete={onDelete} />;
  };

  return (
    <FlatList
      style={{ height: "100%" }}
      data={data}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item._id}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}

export default ListItem;
