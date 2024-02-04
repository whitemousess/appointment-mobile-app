import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

function ClientEmpty({ title }) {
  return (
    <View
      style={{
        height: 200,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name="emoticon-confused-outline"
        size={100}
        color="black"
      />
      <Text style={{ fontWeight: 500, fontSize: 16 }}>{title}</Text>
    </View>
  );
}

export default ClientEmpty;
