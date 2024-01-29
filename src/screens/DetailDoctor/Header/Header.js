import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

function Header() {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dd6sxqlso/image/upload/v1699962776/dormitory/rpw0ivixii7zkematdbj.jpg",
          }}
          style={{ width: 250, height: 250, borderRadius: 999 }}
        />
        <Text style={{ marginVertical: 16, fontSize: 18, fontWeight: 600 }}>
          FullName
        </Text>
      </View>
      <Text>Chuyên khoa</Text>
      <Text style={{ marginVertical: 10 }}>Địa chỉ</Text>
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
        <Text style={{ textAlign: "center" }}>Đặt lịch hẹn</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Header;
