import { FlatList, RefreshControl } from "react-native";
import Item from "./Item";
import ClientEmpty from "~/components/ClientEmpty";

function ListAppointment({ data = [], refreshing, onRefresh, onDelete }) {
  if (data.length == 0) {
    return <ClientEmpty title={"Không có dữ liệu"} />;
  }

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

export default ListAppointment;
