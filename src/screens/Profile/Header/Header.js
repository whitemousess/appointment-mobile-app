import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

function Header({ data }) {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Image
          source={{
            uri: data.imageUrl,
          }}
          style={{ width: 250, height: 250, borderRadius: 999 }}
        />
        <Text style={{ marginVertical: 16, fontSize: 18, fontWeight: 600 }}>
          {data.fullName}
        </Text>
      </View>
      <Text>{data.specialist}</Text>
      <Text style={{ marginVertical: 10 }}>{data.address}</Text>
    </View>
  );
}

export default Header;
