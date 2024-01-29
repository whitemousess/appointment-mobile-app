import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ModalPost from "./ModalPost";

function ButtonPost() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity onPress={openModal} style={styles.upStatus}>
        <Text>Bạn đang nghĩ gì?</Text>
      </TouchableOpacity>
      <ModalPost visible={modalVisible} onClose={closeModal} />
    </>
  );
}

const styles = StyleSheet.create({
  upStatus: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
    borderWidth: 1,
    borderColor: "#e9e9e9",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default ButtonPost;
