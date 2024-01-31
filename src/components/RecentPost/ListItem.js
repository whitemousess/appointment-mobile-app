import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

function ListItem({ data }) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#e9e9e9",
        borderRadius: 10,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DetailDoctor", {
            doctorId: data.id,
          })
        }
        style={{ padding: 10, flexDirection: "row" }}
        activeOpacity={0.8}
      >
        <Image
          source={data.imageUrl}
          style={{ width: 50, height: 50, borderRadius: 50, marginRight: 10 }}
        />
        <Text style={{ fontWeight: "bold" }}>{data.Name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("DetailPost", {
            data: data,
          })
        }
      >
        <Image source={data.imagePost} style={{ width: "auto", height: 400 }} />
        <View style={{ paddingVertical: 16, paddingHorizontal: 6 }}>
          <Text>{data.Status}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ListItem;
