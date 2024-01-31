import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import HeaderGoBack from "~/components/HeaderGoBack";
import SafeView from "~/components/SafeView";

function DetailChat() {
  const route = useRoute();
  const info = route?.params?.data;

  return (
    <SafeView>
      <HeaderGoBack title={info.fullName} />
      <Text>DetailChat</Text>
    </SafeView>
  );
}

export default DetailChat;
