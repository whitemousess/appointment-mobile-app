import { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
} from "react-native";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import Toast from "react-native-toast-message";

import InputCustom from "~/components/InputCustom";
import ButtonCustom from "~/components/ButtonCustom";
import SafeView from "~/components/SafeView";
import HeaderGoBack from "~/components/HeaderGoBack";
import * as userService from "~/services/userService";

const optionSpecialist = [
  {
    value: "Khoa thần kinh",
  },
  {
    value: "Khoa tai mũi họng",
  },
  {
    value: "Khoa tim mạch",
  },
];

function AddDoctor() {
  const [data, setData] = useState({
    username: "",
    password: "",
    rePassword: "",
    gender: 0,
    specialist: optionSpecialist[0].value,
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [invalidFields, setInvalidFields] = useState({});

  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
    setInvalidFields({ ...invalidFields, [key]: false });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const newDoctor = () => {
    if (data.password !== data.rePassword) {
      Toast.show({
        type: "error",
        text1: "Mật khẩu không trùng khớp",
      });
    } else if (!validateEmail(data.email)) {
      Toast.show({
        type: "error",
        text1: "Email không hợp lệ",
      });
    } else {
      userService
        .newDoctor({ data })
        .then((res) => {
          if (res.data) {
            Toast.show({
              type: "success",
              text1: "Thêm thành công",
            });
          } else if (res.response.data.error.keyPattern.username) {
            Toast.show({
              type: "error",
              text1: "không thể đăng ký",
              text2: "Tài khoản đã tồn tại",
            });
            navigator("");
          } else if (res.response.data.error.keyPattern.email) {
            Toast.show({
              type: "error",
              text1: "không thể đăng ký",
              text2: "Email đã tồn tại",
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSubmit = () => {
    let newInvalidFields = {};
    Object.keys(data).forEach((key) => {
      if (data[key] === "") {
        newInvalidFields[key] = true;
      }
    });

    if (Object.keys(newInvalidFields).length === 0) {
      newDoctor();
    } else {
      setInvalidFields(newInvalidFields);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView style={styles.container}>
        <HeaderGoBack title={`Thêm bác sĩ`} />
        <SafeView>
          <View style={styles.contentRegister}>
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
              label="Nhập lại mật khẩu ..."
              password={true}
              value={data.rePassword}
              onChange={(text) => handleChange("rePassword", text)}
              icon={
                <Ionicons
                  name="lock-closed"
                  size={20}
                  color={`${invalidFields["rePassword"] ? "red" : "#666"}`}
                />
              }
              isError={invalidFields["rePassword"]}
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

            <Picker
              itemStyle={{
                height: 150,
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 10,
                marginBottom: 10,
              }}
              selectedValue={data.specialist}
              onValueChange={(itemValue) =>
                setData({ ...data, specialist: itemValue })
              }
            >
              {optionSpecialist.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item.value}
                  value={item.value}
                />
              ))}
            </Picker>

            <ButtonCustom label="Thếm" onPress={handleSubmit} />
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

export default AddDoctor;
