import { ScrollView, Text, View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "~/shared/AuthProvider";

import SafeView from "~/components/SafeView";
import Header from "./Header";
import RecentPost from "~/components/RecentPost";
import Doctor from "~/assets/img/doctor.jpg";
import ButtonPost from "~/components/PostStatus/ButtonPost";

function Profile() {
  const { currentInfo } = useContext(AuthContext);

  const dataPost = [
    {
      id: 1,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 2,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 3,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 4,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 5,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 6,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 7,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 8,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 9,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 10,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 11,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
    {
      id: 12,
      imageUrl: Doctor,
      Name: "Name",
      status: "Status",
      imagePost: Doctor,
      Status: "Có làm mới có ăn",
    },
  ];

  return (
    <SafeView>
      <ScrollView>
        <Header data={currentInfo} />
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 10,
              borderTopWidth: 1,
              borderColor: "#ccc",
              paddingTop: 10,
            }}
          >
            Bài viết
          </Text>
          {currentInfo.role === 1 && <ButtonPost />}
        </View>
        <RecentPost data={dataPost} />
      </ScrollView>
    </SafeView>
  );
}

export default Profile;
