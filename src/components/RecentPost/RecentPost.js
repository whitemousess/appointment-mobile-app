import { Text, TouchableOpacity, View } from "react-native";
import { useContext, useState } from "react";

import ListItem from "./ListItem";
import ButtonPost from "../PostStatus/ButtonPost";
import { AuthContext } from "~/shared/AuthProvider";

function RecentPost({ data = [] }) {
  const { currentInfo } = useContext(AuthContext);
  const [moreData, setMoreData] = useState(data.slice(0, 5));
  const [showMore, setShowMore] = useState(true);

  const handleLoadMore = () => {
    const currentLength = moreData.length;
    const nextData = data.slice(currentLength, currentLength + 5);
    setMoreData([...moreData, ...nextData]);
    if (currentLength + nextData.length >= data.length) {
      setShowMore(false);
    }
  };

  return (
    <View style={{ marginHorizontal: 10 }}>
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
