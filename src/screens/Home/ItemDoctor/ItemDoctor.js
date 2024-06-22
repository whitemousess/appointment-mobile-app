import { ScrollView } from "react-native";
import Item from "./Item";
import { useContext } from "react";
import { AuthContext } from "~/Common/AuthProvider";

function ItemDoctor({ data = [] }) {
  const { currentInfo } = useContext(AuthContext);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((item) => {
        if (item._id !== currentInfo._id) {
          return <Item key={item._id} data={item} />;
        }
      })}
    </ScrollView>
  );
}

export default ItemDoctor;
