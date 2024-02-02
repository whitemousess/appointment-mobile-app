import { FlatList, RefreshControl } from "react-native";
import Item from "./Item";

function ListHistory({ data ,onRefresh,refreshing }) {

  const renderItem = (item) => {
    return <Item data={item} />;
  };

  return (
    <FlatList
      style={{ height: "100%", marginHorizontal: 10, marginTop: 10 }}
      data={data}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item._id}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}

export default ListHistory;
