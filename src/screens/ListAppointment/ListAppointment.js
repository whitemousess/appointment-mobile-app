import { Text } from "react-native";
import SafeView from "~/components/SafeView";
import ListItem from "./ListItem";

function ListAppointment() {
  return (
    <SafeView>
      <Text>Danh sách hẹn khám</Text>
      <ListItem />
    </SafeView>
  );
}

export default ListAppointment;
