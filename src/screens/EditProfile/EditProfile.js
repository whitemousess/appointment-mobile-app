import { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";

import InputCustom from "~/components/InputCustom";
import ButtonCustom from "~/components/ButtonCustom";
import { AuthContext } from "~/shared/AuthProvider";
import SafeView from "~/components/SafeView";
import HeaderGoBack from "~/components/HeaderGoBack";
import UploadImage from "~/components/UploadImage";

function EditProfile() {
  const { editProfile, currentInfo } = useContext(AuthContext);
  const [data, setData] = useState({
    _id: currentInfo._id,
    password: "",
    rePassword: "",
    imageUrl: currentInfo.imageUrl,
    fullName: currentInfo.fullName,
    email: currentInfo.email,
    gender: currentInfo.gender,
    phone: currentInfo.phone,
    address: currentInfo.address,
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
      editProfile(data);
    } else {
      setInvalidFields(newInvalidFields);
    }
  };

  const handleImageUpload = (imageUrl) => {
    setData({ ...data, imageUrl });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView style={styles.container}>
        <View style={styles.contentRegister}>
          <HeaderGoBack title={"Thay đổi thông tin"} />

          <UploadImage onImageUpload={handleImageUpload} />

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

          <ButtonCustom label="Thay đổi" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default EditProfile;
