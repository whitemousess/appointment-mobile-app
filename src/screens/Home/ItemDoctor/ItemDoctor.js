import { ScrollView } from "react-native";
import ListItem from "./ListItem";

function ItemDoctor({ data = [] }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((item) => (
        <ListItem key={item.id} data={item} />
      ))}
    </ScrollView>
  );
}

export default ItemDoctor;
