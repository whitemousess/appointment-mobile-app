import { Text, TextInput, TouchableOpacity, View } from "react-native";

import SafeView from "~/components/SafeView";
import UserItem from "./UserItem";
import { Feather } from "@expo/vector-icons";
import { useCallback, useState } from "react";

function ManagerUser() {
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
      imageUrl:
        "https://res.cloudinary.com/dd6sxqlso/image/upload/v1699870692/dormitory/iljuflq5ckshzglbmzow.jpg",
    },
    {
      id: 2,
      fullName: "User2",
      imageUrl:
        "https://res.cloudinary.com/dd6sxqlso/image/upload/v1699870692/dormitory/iljuflq5ckshzglbmzow.jpg",
    },
    {
      id: 3,
      fullName: "User3",
      imageUrl:
        "https://res.cloudinary.com/dd6sxqlso/image/upload/v1699870692/dormitory/iljuflq5ckshzglbmzow.jpg",
    },
    {
      id: 4,
      fullName: "User4",
      imageUrl:
        "https://res.cloudinary.com/dd6sxqlso/image/upload/v1699870692/dormitory/iljuflq5ckshzglbmzow.jpg",
    },
    {
      id: 5,
      fullName: "User5",
      imageUrl:
        "https://res.cloudinary.com/dd6sxqlso/image/upload/v1699870692/dormitory/iljuflq5ckshzglbmzow.jpg",
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

        <UserItem data={data} refreshing={refreshing} onRefresh={onRefresh}/>
      </View>
    </SafeView>
  );
}

export default ManagerUser;
