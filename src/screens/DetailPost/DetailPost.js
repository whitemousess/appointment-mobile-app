import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import SafeView from "~/components/SafeView";
import Comment from "./Comment";

function DetailPost() {
  const route = useRoute();
  const navigation = useNavigation();
  const data = route?.params?.data;
  const [comment, setComment] = useState("");
  const [submit, setSubmit] = useState(false);
  
  const handleChange = (text) => {
    if (text.trimLeft() === text) {
      setComment(text);
      if (text !== "") {
        setSubmit(true);
      } else {
        setSubmit(false);
      }
    }
  };

  const handleSubmit = () => {
    if (submit) {
      console.log(comment);
      setSubmit(false);
      setComment("");
    }
  };

  return (
    <SafeView>
      <View style={{ marginHorizontal: 10 }}>
        <ScrollView
          style={{ height: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetailDoctor", {
                doctorId: data.id,
              })
            }
            style={{ flexDirection: "row", paddingVertical: 10 }}
          >
            <Image
              source={data.imageUrl}
              style={{
                width: 60,
                height: 60,
                objectFit: "cover",
                borderRadius: 50,
                marginRight: 10,
              }}
            />
            <Text>{data.Name}</Text>
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 10,
              paddingHorizontal: 4,
              paddingVertical: 10,
              marginBottom: 10,
            }}
          >
            <Text style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
              {data.Status}
            </Text>
            <Image
              source={data.imagePost}
              style={{ height: 500, width: "auto" }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="Hãy gửi bình luận vào bài viết ..."
              value={comment}
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

          <Comment data={data} />
        </ScrollView>
      </View>
    </SafeView>
  );
}

export default DetailPost;
