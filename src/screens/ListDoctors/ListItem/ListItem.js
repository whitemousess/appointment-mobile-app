import { useCallback, useContext, useEffect, useState } from "react";
import { FlatList, RefreshControl } from "react-native";

import Item from "./Item";
import { AuthContext } from "~/shared/AuthProvider";

function ListItem({ onScroll, handleLoadMore, data,onRefresh,refreshing }) {
  const { currentInfo } = useContext(AuthContext);
  
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
      onScroll={onScroll}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}

export default ListItem;
