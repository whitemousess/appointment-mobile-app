import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import user from "~/assets/img/user.png";

function ListItem({ data }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        margin: 10,
        borderWidth: 1,
        borderColor: "#e9e9e9",
        borderRadius: 10,
      }}
      activeOpacity={1}
      onPress={() =>
        navigation.navigate("DetailDoctor", {
          data: data,
        })
      }
    >
      <Image
        source={data.imageUrl ? { uri: data.imageUrl } : user}
        style={{ width: 150, height: 150, borderRadius: 10 }}
      />
      <View style={{ paddingTop: 16, paddingBottom: 16 }}>
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          {data.fullName}
        </Text>
        <Text style={{ textAlign: "center" }}>{data.specialist}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ListItem;
