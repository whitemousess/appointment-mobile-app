import { ScrollView } from "react-native";

import SafeView from "~/components/SafeView";
import Header from "./Header";
import RecentPost from "~/components/RecentPost";
import Doctor from "~/assets/img/doctor.jpg";

function Profile() {
  const dataHeader = {
    imageUrl:
      "https://res.cloudinary.com/dd6sxqlso/image/upload/v1699962776/dormitory/rpw0ivixii7zkematdbj.jpg",
    fullName: "Doctor Strange",
    specialist: "Chuyên khoa",
    address: "Hà Nội",
  };

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
        <Header data={dataHeader} />
        <RecentPost data={dataPost} />
      </ScrollView>
    </SafeView>
  );
}

export default Profile;
