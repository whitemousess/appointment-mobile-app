import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import user from "~/assets/img/user.png";

function Item({ data, onDelete }) {
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
          onPress={() => onDelete(data._id)}
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

          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          marginVertical: 10,
          backgroundColor: "white",
          paddingHorizontal: 4,
          paddingVertical: 4,
        }}
      >
        <Image
          source={
            data.doctorId.imageUrl ? { uri: data.doctorId.imageUrl } : user
          }
          style={{ width: 80, height: 80, marginRight: 10 }}
        />

        <View>
          <Text>{data.doctorId.fullName}</Text>
          <Text>{data.status}</Text>
        </View>
      </View>
    </Swipeable>
  );
}

export default Item;
