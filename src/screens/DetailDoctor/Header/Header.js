import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import user from "~/assets/img/user.png";

function Header({ data }) {
  const navigation = useNavigation();

  return (
    <View style={{ marginHorizontal: 10 }}>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Image
          source={data.imageUrl ? { uri: data.imageUrl } : user}
          style={{ width: 250, height: 250, borderRadius: 999 }}
        />
        <Text style={{ marginVertical: 16, fontSize: 18, fontWeight: 600 }}>
          {data.fullName}
        </Text>
      </View>
      <Text>Chuyên khoa : {data.specialist}</Text>
      <Text style={{ marginVertical: 10 }}>Địa chỉ: {data.address}</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          borderWidth: 1,
          borderColor: "#AAD7D9",
          borderRadius: 16,
          paddingVertical: 16,
          marginHorizontal: 16,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Appointment", {
              data: data,
            })
          }
        >
          <Text style={{ textAlign: "center" }}>Đặt lịch hẹn</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

export default Header;
