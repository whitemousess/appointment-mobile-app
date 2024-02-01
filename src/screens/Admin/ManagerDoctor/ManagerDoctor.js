import { Text, TextInput, TouchableOpacity, View } from "react-native";

import SafeView from "~/components/SafeView";
import UserItem from "./UserItem";
import { Feather } from "@expo/vector-icons";
import { useCallback, useState } from "react";

function ManagerDoctor() {
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
      fullName: "Doctor1",
      specialist: "Khoa chấn thương",
      imageUrl:
        "https://res.cloudinary.com/dd6sxqlso/image/upload/v1699341107/dormitory/cgws4mqrwji923xyc4jm.jpg",
    },
    {
      id: 2,
      fullName: "Doctor2",
      specialist: "Khoa chấn thương",
      imageUrl:
        "https://res.cloudinary.com/dd6sxqlso/image/upload/v1699341107/dormitory/cgws4mqrwji923xyc4jm.jpg",
    },
    {
      id: 3,
      fullName: "Doctor3",
      specialist: "Khoa chấn thương",
      imageUrl:
        "https://res.cloudinary.com/dd6sxqlso/image/upload/v1699341107/dormitory/cgws4mqrwji923xyc4jm.jpg",
    },
    {
      id: 4,
      fullName: "Doctor4",
      specialist: "Khoa chấn thương",
      imageUrl:
        "https://res.cloudinary.com/dd6sxqlso/image/upload/v1699341107/dormitory/cgws4mqrwji923xyc4jm.jpg",
    },
    {
      id: 5,
      fullName: "Doctor5",
      specialist: "Khoa chấn thương",
      imageUrl:
        "https://res.cloudinary.com/dd6sxqlso/image/upload/v1699341107/dormitory/cgws4mqrwji923xyc4jm.jpg",
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

        <UserItem data={data} refreshing={refreshing} onRefresh={onRefresh} />
      </View>
    </SafeView>
  );
}

export default ManagerDoctor;
