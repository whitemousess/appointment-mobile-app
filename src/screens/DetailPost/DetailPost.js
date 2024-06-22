import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useCallback, useContext, useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

import SafeView from "~/components/SafeView";
import Comment from "./Comment";

import { AuthContext } from "~/Common/AuthProvider";
import * as recentPostService from "~/services/recentPostService";
import * as commentService from "~/services/commentService";
import user from "~/assets/img/user.png";

function DetailPost() {
  const { currentInfo } = useContext(AuthContext);
  const route = useRoute();
  const navigation = useNavigation();
  const { data } = route?.params;
  const [comment, setComment] = useState("");
  const [dataComment, setDataComment] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [btnMenu, setBtnMenu] = useState(false);

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

  const fetch = () => {
    commentService
      .getComment({ id: data._id })
      .then((res) => {
        setDataComment(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    if (submit) {
      setSubmit(false);
      setComment("");
      const dataSubmit = {
        recentPostId: data._id,
        currentUserId: currentInfo._id,
        comment: comment,
      };

      commentService
        .commentStatus({ data: dataSubmit })
        .then((res) => {
          if (res) {
            fetch();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onDelete = (id) => {
    recentPostService
      .deleteStatus({ id })
      .then((res) => {
        if (res) {
          Toast.show({
            type: "success",
            text1: "Xóa thành công",
          });
          navigation.goBack();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useFocusEffect(
    useCallback(() => {
      fetch();
    }, [])
  );

  return (
    <SafeView>
      <ScrollView
        style={{ height: "100%", marginHorizontal: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetailDoctor", {
                data: data.doctorId,
              })
            }
            style={{ flexDirection: "row", paddingVertical: 10 }}
          >
            <Image
              source={
                data.doctorId.imageUrl ? { uri: data.doctorId.imageUrl } : user
              }
              style={{
                width: 60,
                height: 60,
                objectFit: "cover",
                borderRadius: 50,
                marginRight: 10,
              }}
            />
            <Text>{data.doctorId.fullName}</Text>
          </TouchableOpacity>
          {data.doctorId._id === currentInfo._id && (
            <TouchableOpacity onPress={() => setBtnMenu(!btnMenu)}>
              <Feather name="more-horizontal" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>

        {btnMenu && (
          <TouchableOpacity
            activeOpacity={1}
            style={{
              position: "absolute",
              right: 0,
              top: 50,
              borderRadius: 10,
              paddingHorizontal: 20,
              paddingVertical: 10,
              zIndex: 1,
              backgroundColor: "white",
            }}
            onPress={() => onDelete(data._id)}
          >
            <Text>Xóa bài viết</Text>
          </TouchableOpacity>
        )}

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
            {data.status}
          </Text>
          {data.imageUrl && (
            <Image
              source={{ uri: data.imageUrl }}
              style={{ height: 500, width: "auto" }}
            />
          )}
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

        <Comment data={dataComment} />
      </ScrollView>
    </SafeView>
  );
}

export default DetailPost;
