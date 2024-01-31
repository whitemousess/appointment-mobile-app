import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SafeView from "~/components/SafeView";
import { AuthContext } from "~/shared/AuthProvider";

function Menu() {
  const navigation = useNavigation();
  const { logOut, doctor } = useContext(AuthContext);

  return (
    <SafeView>
      <View
        style={{
          height: "100%",
        }}
      >
        {doctor && (
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={styles.btnMenu}
          >
            <Text>Trang cá nhân</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile")}
          style={styles.btnMenu}
        >
          <Text>Thay đổi thông tin cá nhân</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={logOut}
          style={{
            width: "96%",
            position: "absolute",
            bottom: 10,
            borderWidth: 0.5,
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginHorizontal: 10,
            backgroundColor: "#B31312",
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: 600 }}
          >
            Đăng xuất
          </Text>
        </TouchableOpacity>
      </View>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  btnMenu: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 4,
    marginHorizontal: 10,
    backgroundColor: "white",
  },
});

export default Menu;
