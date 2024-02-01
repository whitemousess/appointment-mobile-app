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
      date: "2023-02-02",
    },
    {
      id: 2,
      name: "Name",
      imageUrl: Doctor,
      status: 1,
      date: "2023-02-04",
    },
    {
      id: 3,
      name: "Name",
      imageUrl: Doctor,
      status: 0,
      date: "2023-06-02",
    },
  ];

  return (
    <SafeView>
      <Text style={{ marginLeft: 10 }}>Lịch sử thăm khám</Text>
      <ListHistory data={data} />
    </SafeView>
  );
}

export default History;
