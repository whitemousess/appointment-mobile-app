import { Image, Text, View } from "react-native";

function Item({ data }) {
  console.log(data);
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        overflow: "hidden",
        paddingRight: 10,
        marginVertical: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: data.currentUserId.imageUrl }}
          style={{ width: 100, height: 100 }}
        />
        <View>
          <Text style={{ paddingHorizontal: 10, paddingTop: 10 }}>
            {data.currentUserId.fullName}
          </Text>
          <Text style={{ paddingHorizontal: 10, paddingTop: 4 }}>
            {data.time}
          </Text>
          <Text style={{ paddingHorizontal: 10, paddingTop: 4 }}>
            {data.date}
          </Text>
        </View>
      </View>

      <Text
        style={{
          borderLeftWidth: 1,
          borderColor: "#ccc",
          paddingLeft: 10,
          paddingVertical: 10,
        }}
      >
        {data.status === 0 ? "Chưa khám" : "Đã khám"}
      </Text>
    </View>
  );
}

export default Item;
