import { FlatList, Text, View } from "react-native";
import Item from "./Item";

function ListHistory({ data }) {
  const renderItem = (item) => {
    return <Item data={item} />;
  };

  return (
    <FlatList
      style={{ marginHorizontal: 10, marginTop: 10 }}
      data={data}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ListHistory;
