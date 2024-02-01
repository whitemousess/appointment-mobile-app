import { Text, TouchableOpacity, View } from "react-native";
import { useContext, useEffect, useState } from "react";

import ListItem from "./ListItem";
import ButtonPost from "../PostStatus/ButtonPost";
import { AuthContext } from "~/shared/AuthProvider";

function RecentPost({ data = [] }) {
  const { currentInfo } = useContext(AuthContext);
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
        borderTopWidth: 1,
        borderColor: "#ccc",
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 10 }}>
        Bài viết
      </Text>
      {currentInfo.role === 1 && <ButtonPost />}
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
