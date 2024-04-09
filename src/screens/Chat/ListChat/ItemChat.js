
import { Text, View } from "react-native";

function ItemChat({ data }) {
  return (
    <View style={{ borderWidth: 1, borderColor: "#cccccc40",borderRadius: 6, padding: 8, marginVertical: 6 }}>
      <Text>{data.message}</Text>
    </View>
  );
}

export default ItemChat;
