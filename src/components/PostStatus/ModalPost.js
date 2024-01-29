import { AntDesign, EvilIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
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

import { AuthContext } from "~/shared/AuthProvider";

const ModalPost = ({ visible, onClose }) => {
  const { currentInfo } = useContext(AuthContext);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={{ marginLeft: 10 }}>
          <AntDesign name="close" size={28} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 18 }}>Tạo bài viết</Text>
        <TouchableOpacity onPress={() => {}} style={{ marginRight: 10 }}>
          <Text style={{ fontSize: 18, color: "#6e7275" }}>Tiếp</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.body}>
        <View style={styles.privacy}>
          {currentInfo.imageUrl ? (
            <Image
              source={{ uri: currentInfo.imageUrl }}
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
              marginLeft: 10
            }}
          >
            {currentInfo.fullName}
          </Text>
        </View>

        <TextInput
          style={styles.textInput}
          placeholderTextColor="#818588"
          placeholder="Bạn đang nghĩ gì?"
          multiline={true}
        />
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
    height: "86%",
    backgroundColor: "#2c2f2f",
  },

  privacy: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
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
    marginLeft: 14,
    marginTop: 24,
    marginRight: 14,
    marginBottom: 90,
    fontSize: 18,
    color: "#fff",
  },
});

export default ModalPost;
