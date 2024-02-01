import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

function Item({ data }) {
  const convertDate = new Date(data.date);

  const renderLeftActions = () => {
    return (
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <TouchableOpacity
          style={{
            width: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
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
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: data.imageUrl }}
            style={{ width: 80, height: 80, marginRight: 10 }}
          />
          <View>
            <Text>{data.fullName}</Text>
            <Text>{convertDate.toLocaleDateString("vi-VN")}</Text>
          </View>
        </View>
        <View
          style={{
            marginRight: 10,
          }}
        >
          <Text>{data.status === 0 ? "Chưa khám" : "Đã khám"}</Text>
        </View>
      </View>
    </Swipeable>
  );
}

export default Item;
