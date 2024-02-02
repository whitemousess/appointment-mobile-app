import { FontAwesome } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

function ListItem({ data, onFilter }) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        marginVertical: 20,
        marginHorizontal: 10,
        flexDirection: "column",
        alignItems: "center",
      }}
      onPress={() => onFilter(data)}
    >
      <FontAwesome name="heartbeat" size={40} color="black" />
      <Text style={{ fontSize: 16, textAlign: "center", fontWeight: "bold" }}>
        {data}
      </Text>
    </TouchableOpacity>
  );
}

export default ListItem;
