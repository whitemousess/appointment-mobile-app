import { AntDesign, Entypo, EvilIcons, Ionicons } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { AuthContext } from "~/shared/AuthProvider";
import * as recentPostService from "~/services/recentPostService";
import user from "~/assets/img/user.png";

const ModalPost = ({ visible, onClose }) => {
  const { currentInfo } = useContext(AuthContext);
  const [data, setData] = useState({
    imageUrl: "",
    status: "",
  });
  const [submit, setSubmit] = useState(false);

  const TakePicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setData({ ...data, imageUrl: result.assets[0].uri });
    }
  };

  const handleChange = (text) => {
    if (text.trimLeft() === text) {
      setData({ ...data, status: text });
      if (text !== "") {
        setSubmit(true);
      } else {
        setSubmit(false);
      }
    }
  };

  const handleSubmit = () => {
    if (submit) {
      const formData = new FormData();
      formData.append("status", data.status);
      if (data.imageUrl) {
        formData.append("imageUrl", {
          uri: data.imageUrl,
          type: "image/png",
          name: "image.png",
        });
      }

      recentPostService
        .postStatus({ data: formData })
        .then((res) => {
          onClose();
          setData({});
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            onClose();
            setData({});
          }}
          style={{ marginLeft: 10 }}
        >
          <AntDesign name="close" size={28} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 18 }}>Tạo bài viết</Text>
        <TouchableOpacity onPress={handleSubmit} style={{ marginRight: 10 }}>
          <Ionicons name="send" size={24} color={submit ? "#3468C0" : "#ccc"} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.body}>
        <View style={styles.privacy}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {currentInfo.imageUrl ? (
              <Image
                source={
                  currentInfo.imageUrl ? { uri: currentInfo.imageUrl } : user
                }
                style={{ width: 50, height: 50, borderRadius: 50 }}
              />
            ) : (
              <EvilIcons name="user" size={50} color="white" />
            )}

            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "700",
                marginLeft: 10,
              }}
            >
              {currentInfo.fullName}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              padding: 10,
            }}
            onPress={TakePicture}
          >
            <Entypo name="image" size={24} color="#DCFFB7" />
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.textInput}
          placeholderTextColor="#818588"
          placeholder="Bạn đang nghĩ gì?"
          multiline={true}
          value={data.status}
          onChangeText={(text) => handleChange(text)}
          autoFocus={true}
        />

        {data.imageUrl && (
          <Image
            source={{ uri: data.imageUrl }}
            style={{
              height: 500,
              width: "auto",
              resizeMode: "cover",
              marginHorizontal: 10,
            }}
          />
        )}
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "14%",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333334",
  },

  body: {
    height: 500,
    backgroundColor: "#2c2f2f",
  },

  privacy: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 10,
  },

  btnActive: {
    marginTop: 6,
    marginRight: 8,
    paddingBottom: 2,
    paddingTop: 2,
    paddingLeft: 12,
    paddingRight: 18,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#233a52",
  },

  textInput: {
    marginHorizontal: 14,
    marginVertical: 24,

    fontSize: 18,
    color: "#fff",
  },
});

export default ModalPost;
