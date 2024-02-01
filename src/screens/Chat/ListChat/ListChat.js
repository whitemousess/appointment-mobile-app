import { useCallback, useState } from "react";
import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import ItemChat from "./ItemChat";
import doctor from "~/assets/img/doctor.jpg";

function ListChat() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const dataChat = [
    { id: 1, imageUrl: doctor, fullName: "Doctor 1" },
    { id: 2, imageUrl: doctor, fullName: "Doctor 2" },
    { id: 3, imageUrl: doctor, fullName: "Doctor 3" },
    { id: 4, imageUrl: doctor, fullName: "Doctor 4" },
    { id: 5, imageUrl: doctor, fullName: "Doctor 5" },
    { id: 6, imageUrl: doctor, fullName: "Doctor 6" },
    { id: 7, imageUrl: doctor, fullName: "Doctor 7" },
    { id: 8, imageUrl: doctor, fullName: "Doctor 6" },
    { id: 9, imageUrl: doctor, fullName: "Doctor 7" },
    { id: 10, imageUrl: doctor, fullName: "Doctor 6" },
    { id: 11, imageUrl: doctor, fullName: "Doctor 7" },
  ];
  const [moreData, setMoreData] = useState(dataChat.slice(0, 10));

  const handleLoadMore = () => {
    const currentLength = moreData.length;
    const nextData = dataChat.slice(currentLength, currentLength + 5);
    setMoreData([...moreData, ...nextData]);
  };

  const renderItem = (item) => {
    return <ItemChat data={item} />;
  };

  return (
    <View
      style={{
        borderTopWidth: 1,
        borderColor: "#ccc",
        marginHorizontal: 10,
        marginBottom: 60,
      }}
    >
      <FlatList
      style={{ height: "100%" }}
        data={moreData}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

export default ListChat;
