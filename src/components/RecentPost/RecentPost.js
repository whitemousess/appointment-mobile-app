import { Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";

import ListItem from "./ListItem";
import ClientEmpty from "~/components/ClientEmpty";

function RecentPost({ data = [] }) {
  if (data.length === 0) {
    return <ClientEmpty title={"Không có dữ liệu"} />;
  }

  return (
    <View
      style={{
        marginHorizontal: 10,
        marginTop: 10,
      }}
    >
      {data.map((item) => (
        <ListItem key={item._id} data={item} />
      ))}
    </View>
  );
}

export default RecentPost;
