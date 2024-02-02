import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

function Item({ data }) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 16,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DetailDoctor", {
            data: data,
          })
        }
        style={{ width: "40%" }}
      >
        {data.imageUrl ? (
          <Image
            source={{ uri: data.imageUrl }}
            style={{ width: 150, height: 150, borderRadius: 10 }}
          />
        ) : (
          <FontAwesome6
            name="user-doctor"
            size={150}
            color="black"
            style={{
              borderRadius: 10,
              padding: 10,
            }}
          />
        )}
      </TouchableOpacity>
      <View style={{ width: "50%", marginLeft: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 500 }}>{data.fullName}</Text>
        <Text>{data.specialist}</Text>
        <Text>{data.address}</Text>
        <TouchableOpacity
          style={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            borderWidth: 1,
            borderColor: "#AAD7D9",
            borderRadius: 16,
            paddingVertical: 10,
          }}
          activeOpacity={0.6}
          onPress={() =>
            navigation.navigate("Appointment", {
              data: data,
            })
          }
        >
          <Text style={{ textAlign: "center" }}>Đặt lịch</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Item;
