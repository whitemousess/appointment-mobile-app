import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";

function ListItem() {
  return (
    <View style={{ margin: 20 }}>
      <FontAwesome name="heartbeat" size={40} color="black" />
      <Text style={{ fontSize: 16, textAlign: "center", fontWeight: "bold" }}>
        Title
      </Text>
    </View>
  );
}

export default ListItem;
