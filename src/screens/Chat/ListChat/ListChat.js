import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import * as aiService from '~/services/aiService'
import ItemChat from "./ItemChat";

function ListChat() {
  const [data, setData] = useState([])
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);
  const flatListRef = useRef(null);

  const handleChange = (text) => {
    if (text.trimLeft() === text) {
      setMessage(text);
      if (text !== "") {
        setSubmit(true);
      } else {
        setSubmit(false);
      }
    }
  };

  const handleSubmit = () => {
    if (submit) {
      setSubmit(false);
      setMessage("");

      if (message !== "") {
        aiService.sentChat({ data: message })
          .then((res) => {
            setData([...data, { message: res.data }]);
          })
          .catch((error) => {
            console.error("Error while fetching chat:", error);
          });
      }
    }
  };

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd();
    }
  }, [data]);

  const renderItem = (item) => {
    return <ItemChat data={item} />;
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View
        style={{
          borderTopWidth: 1,
          borderColor: "#ccc",
          marginHorizontal: 10,
          marginBottom: 60,
        }}
      >

        <FlatList 
        ref={flatListRef}
          style={{ height: "90%" }}
          data={data}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Hãy gửi tin nhắn ..."
            value={message}
            onChangeText={(text) => handleChange(text)}
            style={{
              width: "88%",
              borderWidth: 1,
              borderColor: "#e9e9e9",
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 14,
            }}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleSubmit}
            style={{ padding: 12 }}
          >
            <Ionicons
              name="send"
              size={24}
              color={submit ? "#3468C0" : "#ccc"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default ListChat;
