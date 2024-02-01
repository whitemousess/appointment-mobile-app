import { Image, Text, View } from "react-native";

function Item({ data }) {
  const convertDate = new Date(data.date);

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
        <Image source={data.imageUrl} style={{ width: 100, height: 100 }} />
        <View>
          <Text style={{ paddingHorizontal: 10, paddingTop: 10 }}>
            {data.name}
          </Text>
          <Text style={{ paddingHorizontal: 10, paddingTop: 4 }}>
            Ngày khám : {convertDate.toLocaleDateString("vi-VN")}
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
        {data.status === 0 ? "Đã khám" : "Chưa khám"}
      </Text>
    </View>
  );
}

export default Item;
