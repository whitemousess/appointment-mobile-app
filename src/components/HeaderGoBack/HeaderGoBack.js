import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";

function HeaderGoBack({ title }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      }}
    >
      <Ionicons name="chevron-back" size={24} color="black" />
      <Text style={{ marginHorizontal: 10 }}>{title}</Text>
    </TouchableOpacity>
  );
}

export default HeaderGoBack;
