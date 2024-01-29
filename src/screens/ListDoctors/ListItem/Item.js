import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

import Doctor from "~/assets/img/doctor.jpg";

function Item() {
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
            doctorId: 1,
          })
        }
        style={{ width: "40%" }}
      >
        <Image
          source={Doctor}
          style={{ width: 140, height: 140, borderRadius: 9999 }}
        />
      </TouchableOpacity>
      <View style={{ width: "60%" }}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>Họ tên</Text>
        <Text>Chuyên khoa</Text>
        <Text>Địa chỉ</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            borderWidth: 1,
            borderColor: "#AAD7D9",
            borderRadius: 16,
            paddingVertical: 10,
          }}
        >
          <Text style={{ textAlign: "center" }}>Đặt lịch</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Item;
