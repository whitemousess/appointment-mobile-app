import { Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";

import ListItem from "./ListItem";

function RecentPost({ data = [] }) {
  const [moreData, setMoreData] = useState(data.slice(0, 5));
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    if (data.length === 0) {
      setShowMore(false);
    }
  }, []);

  const handleLoadMore = () => {
    const currentLength = moreData.length;
    const nextData = data.slice(currentLength, currentLength + 5);
    setMoreData([...moreData, ...nextData]);
    if (currentLength + nextData.length >= data.length) {
      setShowMore(false);
    }
  };

  return (
    <View
      style={{
        marginHorizontal: 10,
        marginTop: 10,
      }}
    >
      {moreData.map((item) => (
        <ListItem key={item.id} data={item} />
      ))}
      {showMore && (
        <TouchableOpacity
          onPress={handleLoadMore}
          style={{ alignItems: "center", paddingVertical: 16 }}
        >
          <Text>Tải thêm</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default RecentPost;
