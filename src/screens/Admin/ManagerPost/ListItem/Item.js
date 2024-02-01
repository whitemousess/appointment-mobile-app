import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

function Item({ data }) {
  const renderLeftActions = () => {
    return (
      <View
        style={{ flexDirection: "row", marginVertical: 10, marginLeft: 10 }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            backgroundColor: "#f87171",
          }}
          activeOpacity={0.8}
        >
          <MaterialIcons name="delete" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={renderLeftActions}>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          marginVertical: 10,
          paddingHorizontal: 10,
          paddingVertical: 20,
          backgroundColor: "white",
        }}
      >
        <Text>{data.fullName}</Text>
        <Text>{data.content}</Text>
      </View>
    </Swipeable>
  );
}

export default Item;
