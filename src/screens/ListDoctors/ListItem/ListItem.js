import { FlatList, View } from "react-native";

import Item from "./Item";
import Doctor from "~/assets/img/doctor.jpg";
import { useState } from "react";

function ListItem({ onScroll }) {
  const data = [
    {
      id: 1,
      name: "Name",
      avatar: Doctor,
      address: "Địa chỉ",
      special: "Khoa thần kinh",
    },
    {
      id: 2,
      name: "Name",
      avatar: Doctor,
      address: "Địa chỉ",
      special: "Khoa thần kinh",
    },
    {
      id: 3,
      name: "Name",
      avatar: Doctor,
      address: "Địa chỉ",
      special: "Khoa thần kinh",
    },
    {
      id: 4,
      name: "Name",
      avatar: Doctor,
      address: "Địa chỉ",
      special: "Khoa thần kinh",
    },
    {
      id: 5,
      name: "Name",
      avatar: Doctor,
      address: "Địa chỉ",
      special: "Khoa thần kinh",
    },
    {
      id: 6,
      name: "Name",
      avatar: Doctor,
      address: "Địa chỉ",
      special: "Khoa thần kinh",
    },
  ];

  const [moreData, setMoreData] = useState(data.slice(0, 5));

  const handleLoadMore = () => {
    const currentLength = moreData.length;
    const nextData = data.slice(currentLength, currentLength + 5);
    setMoreData([...moreData, ...nextData]);
  };

  const renderItem = (item) => {
    return <Item data={item} />;
  };

  return (
    <FlatList
      data={moreData}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.1}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
    />
  );
}

export default ListItem;
