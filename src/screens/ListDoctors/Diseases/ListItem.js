import { FontAwesome } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

function ListItem({ data, onFilter, selected }) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        marginVertical: 20,
        marginHorizontal: 10,
        flexDirection: "column",
        alignItems: "center",
      }}
      onPress={() => {
        if (selected !== data) {
          onFilter(data);
        } else {
          onFilter("");
        }
      }}
    >
      <FontAwesome
        name="heartbeat"
        size={40}
        color={selected === data ? "#3468C0" : "black"}
      />
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          fontWeight: "bold",
          color: selected === data ? "#3468C0" : "black",
        }}
      >
        {data}
      </Text>
    </TouchableOpacity>
  );
}

export default ListItem;
