import { useCallback, useContext, useEffect, useState } from "react";
import { FlatList, RefreshControl } from "react-native";

import Item from "./Item";
import { AuthContext } from "~/shared/AuthProvider";
import ClientEmpty from "~/components/ClientEmpty";

function ListItem({
  onScroll,
  handleLoadMore,
  data = [],
  onRefresh,
  refreshing,
}) {
  const { currentInfo } = useContext(AuthContext);

  if (data.length == 0) {
    return <ClientEmpty title={"Không có dữ liệu"} />;
  }

  const renderItem = (item) => {
    if (item._id !== currentInfo._id) {
      return <Item key={item._id} data={item} />;
    }
  };

  return (
    <FlatList
      style={{ height: "100%" }}
      data={data}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item._id}
      onEndReached={handleLoadMore}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}

export default ListItem;
