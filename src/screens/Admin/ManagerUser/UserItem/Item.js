import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import user from "~/assets/img/user.png";

function Item({ data, onDelete }) {
  const navigation = useNavigation();

  const renderLeftActions = () => {
    return (
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            backgroundColor: "#16a34a",
            marginRight: 4,
          }}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("EditUser", {
              data: data,
            })
          }
        >
          <Feather name="edit" size={24} color="#fff" />
        </TouchableOpacity>
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
          marginVertical: 10,
          borderRadius: 10,
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <Image
          source={data.imageUrl ? { uri: data.imageUrl } : user}
          style={{ width: 80, height: 80, marginRight: 10 }}
        />
        <Text>{data.fullName}</Text>
      </View>
    </Swipeable>
  );
}

export default Item;
