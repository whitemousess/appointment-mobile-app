import { useContext, useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";

import InputCustom from "~/components/InputCustom";
import ButtonCustom from "~/components/ButtonCustom";
import { AuthContext } from "~/Common/AuthProvider";
import SafeView from "~/components/SafeView";

function Register({ navigation }) {
  const { register } = useContext(AuthContext);
  const [data, setData] = useState({
    username: "",
    password: "",
    fullName: "",
    email: "",
    phone: "",
    gender: 0,
    address: "",
  });
  const [invalidFields, setInvalidFields] = useState({});

  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
    setInvalidFields({ ...invalidFields, [key]: false });
  };

  const handleSubmit = () => {
    let newInvalidFields = {};
    Object.keys(data).forEach((key) => {
      if (data[key] === "") {
        newInvalidFields[key] = true;
      }
    });

    if (Object.keys(newInvalidFields).length === 0) {
      register(data, navigation);
    } else {
      setInvalidFields(newInvalidFields);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView style={styles.container}>
        <SafeView>
          <View style={styles.contentRegister}>
            <Text style={styles.Header}>Đăng ký</Text>

            <InputCustom
              label="Tài khoản ..."
              value={data.username}
              onChange={(text) => handleChange("username", text)}
              icon={
                <MaterialIcons
                  name="person"
                  size={28}
                  color={`${invalidFields["username"] ? "red" : "#666"}`}
                />
              }
              isError={invalidFields["username"]}
            />

            <InputCustom
              label="Mật khẩu ..."
              password={true}
              value={data.password}
              onChange={(text) => handleChange("password", text)}
              icon={
                <Ionicons
                  name="lock-closed"
                  size={20}
                  color={`${invalidFields["password"] ? "red" : "#666"}`}
                />
              }
              isError={invalidFields["password"]}
            />

            <InputCustom
              label="Tên người dùng ..."
              value={data.fullName}
              onChange={(text) => handleChange("fullName", text)}
              icon={
                <MaterialIcons
                  name="person"
                  size={28}
                  color={`${invalidFields["fullName"] ? "red" : "#666"}`}
                />
              }
              isError={invalidFields["fullName"]}
            />

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => setData({ ...data, gender: 0 })}
                style={{
                  flexDirection: "row",
                  paddingRight: 50,
                  paddingBottom: 16,
                }}
              >
                <View
                  style={{
                    borderWidth: 5,
                    borderColor: data.gender === 0 ? "#40A2E3" : "#333",
                    width: 20,
                    height: 20,
                    borderRadius: 50,
                    marginRight: 5,
                  }}
                />
                <Text>Nam</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setData({ ...data, gender: 1 })}
                style={{
                  flexDirection: "row",
                  paddingRight: 50,
                  paddingBottom: 16,
                }}
              >
                <View
                  style={{
                    borderWidth: 5,
                    borderColor: data.gender === 1 ? "#40A2E3" : "#333",
                    width: 20,
                    height: 20,
                    borderRadius: 50,
                    marginRight: 5,
                  }}
                />
                <Text>Nữ</Text>
              </TouchableOpacity>
            </View>

            <InputCustom
              label="Email ..."
              value={data.email}
              onChange={(text) => handleChange("email", text)}
              keyboardType="email-address"
              icon={
                <MaterialIcons
                  name="alternate-email"
                  size={28}
                  color={`${invalidFields["email"] ? "red" : "#666"}`}
                />
              }
              isError={invalidFields["email"]}
            />

            <InputCustom
              label="Số điện thoại ..."
              value={data.phone}
              onChange={(text) => handleChange("phone", text)}
              keyboardType="numeric"
              icon={
                <AntDesign
                  name="phone"
                  size={28}
                  color={`${invalidFields["phone"] ? "red" : "#666"}`}
                />
              }
              isError={invalidFields["email"]}
            />

            <InputCustom
              label="Địa chỉ ..."
              value={data.address}
              onChange={(text) => handleChange("address", text)}
              icon={
                <MaterialIcons
                  name="home"
                  size={28}
                  color={`${invalidFields["address"] ? "red" : "#666"}`}
                />
              }
              isError={invalidFields["address"]}
            />

            <ButtonCustom label="Đăng ký" onPress={handleSubmit} />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{
                alignItems: "flex-end",
                marginHorizontal: 24,
                marginVertical: 20,
              }}
            >
              <Text>Đã có tài khoản !</Text>
            </TouchableOpacity>
          </View>
        </SafeView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  imageRegister: {
    display: "flex",
    alignItems: "center",
  },

  contentRegister: {
    paddingRight: 20,
    paddingLeft: 20,
  },

  Header: {
    fontSize: 28,
    fontWeight: "500",
    color: "#333",
    paddingBottom: 30,
    paddingTop: 30,
    textAlign: "center",
  },
});

export default Register;
