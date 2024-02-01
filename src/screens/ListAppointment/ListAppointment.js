import { Text, View } from "react-native";
import SafeView from "~/components/SafeView";
import ListItem from "./ListItem";
import Doctor from "~/assets/img/doctor.jpg";

function ListAppointment() {
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
      <Text style={{ marginLeft: 10 }}>Lịch hẹn khám</Text>
      <ListItem data={data} />
    </SafeView>
  );
}

export default ListAppointment;
