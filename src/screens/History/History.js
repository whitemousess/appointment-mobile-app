import { Text, View } from "react-native";
import SafeView from "~/components/SafeView";
import ListHistory from "./ListHistory";
import Doctor from "~/assets/img/doctor.jpg";

function History() {
  const data = [
    {
      id: 1,
      name: "Name",
      imageUrl: Doctor,
      status: 0,
    },
    {
      id: 2,
      name: "Name",
      imageUrl: Doctor,
      status: 1,
    },
    {
      id: 3,
      name: "Name",
      imageUrl: Doctor,
      status: 0,
    },
  ];

  return (
    <SafeView>
      <Text>Lịch sử thăm khám</Text>
      <ListHistory data={data} />
    </SafeView>
  );
}

export default History;
