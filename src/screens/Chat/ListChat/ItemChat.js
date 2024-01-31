import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity } from "react-native";

function ItemChat({ data }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailChat", { data })}
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#ccc",
        marginVertical: 10,
        paddingVertical: 10,
      }}
    >
      <Image
        source={data.imageUrl}
        style={{
          width: 60,
          height: 60,
          borderRadius: 50,
          marginHorizontal: 10,
        }}
      />
      <Text>{data.fullName}</Text>
    </TouchableOpacity>
  );
}

export default ItemChat;
