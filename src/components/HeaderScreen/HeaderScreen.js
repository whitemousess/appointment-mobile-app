import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";

import { AuthContext } from "~/shared/AuthProvider";
import user from "~/assets/img/user.png";

function HeaderScreen() {
  const { currentInfo } = useContext(AuthContext);
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
        paddingTop: StatusBar.currentHeight || 24,
        paddingBottom: 10,
        paddingHorizontal: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {currentInfo.imageUrl ? (
          <Image
            source={currentInfo.imageUrl ? { uri: currentInfo.imageUrl } : user}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
        ) : (
          <EvilIcons name="user" size={50} color="white" />
        )}
        <Text style={{ marginLeft: 10 }}>{currentInfo.fullName}</Text>
      </View>
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
