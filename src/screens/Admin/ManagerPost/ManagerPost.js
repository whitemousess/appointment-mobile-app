import { TextInput, TouchableOpacity, View } from "react-native";

import SafeView from "~/components/SafeView";
import { Feather } from "@expo/vector-icons";
import ListItem from "./ListItem";
import { useCallback, useState } from "react";

function ManagerPost() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  

  const data = [
    {
      id: 1,
      fullName: "User1",
      content: "Ra xã hội làm ăn bượn trải",
    },
    {
      id: 2,
      fullName: "User2",
      content: "Ra xã hội làm ăn bượn trải",
    },
    {
      id: 3,
      fullName: "User3",
      content: "Ra xã hội làm ăn bượn trải",
    },
    {
      id: 4,
      fullName: "User4",
      content: "Ra xã hội làm ăn bượn trải",
    },
    {
      id: 5,
      fullName: "User5",
      content: "Ra xã hội làm ăn bượn trải",
    },
  ];

  return (
    <SafeView>
      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
            marginTop: 10,
            paddingHorizontal: 4,
          }}
        >
          <TextInput
            placeholder="Tìm kiếm theo tên ..."
            style={{ paddingVertical: 10, paddingHorizontal: 10 }}
          />
          <TouchableOpacity
            activeOpacity={1}
            style={{
              backgroundColor: "#000",
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 10,
            }}
          >
            <Feather name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <ListItem data={data} refreshing={refreshing} onRefresh={onRefresh} />
      </View>
    </SafeView>
  );
}

export default ManagerPost;
