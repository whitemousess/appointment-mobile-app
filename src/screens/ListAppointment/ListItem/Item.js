import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import user from "~/assets/img/user.png";

function Item({ data, onDelete, onCancel, onSuccess }) {
  const swipeableRef = useRef(null);

  const renderLeftActions = () => {
    return (
      <View
        style={{ flexDirection: "row", marginVertical: 10, marginLeft: 10 }}
      >
        {data.status === 0 && (
          <TouchableOpacity
            style={{
              width: 50,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "green",
              marginRight: 4,
            }}
            activeOpacity={0.8}
            onPress={() => {
              onSuccess(data._id);
              swipeableRef.current.close();
            }}
          >
            <AntDesign name="checkcircle" size={24} color="white" />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={{
            width: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f87171",
          }}
          activeOpacity={0.8}
          onPress={() => {
            swipeableRef.current.close();
            if (data.status === 0) {
              onCancel(data._id);
            } else {
              onDelete(data._id);
            }
          }}
        >
          <MaterialIcons
            name={data.status === 0 ? "cancel" : "delete"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Swipeable ref={swipeableRef} renderRightActions={renderLeftActions}>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          overflow: "hidden",
          paddingRight: 10,
          marginVertical: 6,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={
              data.currentUserId.imageUrl
                ? { uri: data.currentUserId.imageUrl }
                : user
            }
            style={{ width: 100, height: 100 }}
          />
          <View>
            <Text style={{ paddingHorizontal: 10, paddingTop: 10 }}>
              {data.currentUserId.fullName}
            </Text>
            <Text style={{ paddingHorizontal: 10, paddingTop: 4 }}>
              {data.time}
            </Text>
            <Text style={{ paddingHorizontal: 10, paddingTop: 4 }}>
              {data.date}
            </Text>
          </View>
        </View>

        <Text
          style={{
            borderLeftWidth: 1,
            borderColor: "#ccc",
            paddingLeft: 10,
            paddingVertical: 10,
          }}
        >
          {(data.status === 0 && "Chưa khám") ||
            (data.status === 1 && "Đã khám") ||
            (data.status === 2 && "Đã hủy")}
        </Text>
      </View>
    </Swipeable>
  );
}

export default Item;
