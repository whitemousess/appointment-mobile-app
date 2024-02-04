import { Text, View } from "react-native";
import Item from "./Item";

function Comment({ data = [] }) {
  return (
    <View>
      {data.map((item) => (
        <Item key={item._id} data={item} />
      ))}
    </View>
  );
}

export default Comment;
