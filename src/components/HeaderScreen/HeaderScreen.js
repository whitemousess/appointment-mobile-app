import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { AuthContext } from "~/shared/AuthProvider";

function HeaderScreen() {
  const { currentInfo, doctor } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: "#AAD7D9",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingTop: 24,
        paddingBottom: 10,
        paddingHorizontal: 10,
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          doctor && navigation.navigate("Profile");
        }}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        {currentInfo.imageUrl ? (
          <Image
            source={{ uri: currentInfo.imageUrl }}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
        ) : (
          <EvilIcons name="user" size={50} color="white" />
        )}
        <Text style={{ marginLeft: 10 }}>{currentInfo.fullName}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate("Chat")}
      >
        <Ionicons name="chatbubbles" size={45} color="#3468C0" />
      </TouchableOpacity>
    </View>
  );
}

export default HeaderScreen;
