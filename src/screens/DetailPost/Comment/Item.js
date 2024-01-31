import { Image, Text, View } from "react-native";

function Item({ data }) {

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 5,
      }}
    >
      <Image
        source={{ uri: data.imageUrl }}
        style={{ width: 50, height: 50, borderRadius: 50, marginRight: 10 }}
      />
      <View
        style={{
          backgroundColor: "#e9e9e9",
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <Text style={{ marginBottom: 4, fontWeight: 600 }}>{data.name}</Text>
        <Text>{data.content}</Text>
      </View>
    </View>
  );
}

export default Item;
