import { Image, Text, View } from "react-native";

function Item({ data }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image source={data.imageUrl} style={{ width: 60, height: 50 }} />
        <Text>{data.name}</Text>
      </View>

      <Text>{data.status === 0 ? "Đã khám" : "Chưa khám"}</Text>
    </View>
  );
}

export default Item;
