import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "~/Common/AuthProvider";
import user from "~/assets/img/user.png";

const CustomDrawerContent = (props) => {
  const { currentInfo, logOut } = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Image
          source={currentInfo.imageUrl ? { uri: currentInfo.imageUrl } : user}
          style={{ width: 80, height: 80, borderRadius: 50 }}
        />
        <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "bold" }}>
          {currentInfo.fullName}
        </Text>
      </View>

      <DrawerItemList {...props} />

      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-end",
          marginBottom: 16,
        }}
      >
        <TouchableOpacity
          style={{ paddingVertical: 16, marginTop: 16 }}
          onPress={logOut}
        >
          <Text
            style={{
              fontSize: 16,
              color: "red",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Đăng xuất
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
