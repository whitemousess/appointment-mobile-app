import { Feather, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

function Item({ data, onDelete }) {
  const navigation = useNavigation();

  const renderLeftActions = () => {
    return (
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditDoctor", {
              data: data,
            })
          }
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            backgroundColor: "#16a34a",
            marginRight: 4,
          }}
          activeOpacity={0.8}
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
          onPress={() => {
            onDelete(data._id);
          }}
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
        }}
      >
        {data.imageUrl ? (
          <Image
            source={{ uri: data.imageUrl }}
            style={{ width: 80, height: 80, marginRight: 10 }}
          />
        ) : (
          <FontAwesome6
            name="user-doctor"
            size={80}
            color="black"
            style={{ padding: 5, marginRight: 10, borderRightWidth: 1 }}
          />
        )}
        <View>
          <Text>{data.fullName}</Text>
          <Text>{data.specialist}</Text>
        </View>
      </View>
    </Swipeable>
  );
}

export default Item;
