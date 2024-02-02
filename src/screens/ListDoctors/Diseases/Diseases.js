import { FlatList } from "react-native";
import ListItem from "./ListItem";

function Diseases({ onFilter, selected }) {
  const specialist = [
    {
      value: "Khoa thần kinh",
    },
    {
      value: "Khoa tai mũi họng",
    },
    {
      value: "Khoa tim mạch",
    },
  ];

  const renderItem = (item) => {
    return (
      <ListItem data={item.value} onFilter={onFilter} selected={selected} />
    );
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={specialist}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item.value}
    />
  );
}

export default Diseases;
