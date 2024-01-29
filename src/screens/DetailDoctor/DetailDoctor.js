import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";

function DetailDoctor() {
  const route = useRoute();
  const doctorId = route?.params.doctorId;

  return (
    <View>
      <Text>DetailDoctor</Text>
    </View>
  );
}

export default DetailDoctor;
