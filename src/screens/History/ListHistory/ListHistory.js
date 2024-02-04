import { FlatList, RefreshControl } from "react-native";
import Item from "./Item";
import ClientEmpty from "~/components/ClientEmpty";

function ListHistory({ data = [], onRefresh, refreshing, onCancel, onDelete }) {
  if (data.length == 0) {
    return <ClientEmpty title={"Không có dữ liệu"} />;
  }

  const renderItem = (item) => {
    return <Item data={item} onCancel={onCancel} onDelete={onDelete} />;
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
