import { Text, View } from "react-native";
import Item from "./Item";

function Comment({ data }) {
  const dataCmt = [
    {
      id: 1,
      name: "user1",
      imageUrl:
        "https://res.cloudinary.com/dd6sxqlso/image/upload/v1699870692/dormitory/iljuflq5ckshzglbmzow.jpg",
      content: "Làm ăn như qq",
    },
    {
      id: 2,
      name: "user2",
      imageUrl:
        "https://res.cloudinary.com/dd6sxqlso/image/upload/v1699870692/dormitory/iljuflq5ckshzglbmzow.jpg",
      content: "Làm ăn Thất đức",
    },
    {
      id: 3,
      name: "user3",
      imageUrl:
        "https://res.cloudinary.com/dd6sxqlso/image/upload/v1699870692/dormitory/iljuflq5ckshzglbmzow.jpg",
      content: "Chữa lành thành què",
    },
    {
      id: 4,
      name: "user4",
      imageUrl:
        "https://res.cloudinary.com/dd6sxqlso/image/upload/v1699870692/dormitory/iljuflq5ckshzglbmzow.jpg",
      content: "Vô sinh mà có con được à",
    },
  ];

  return (
    <View>
      {dataCmt.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </View>
  );
}

export default Comment;
