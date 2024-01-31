import { Image, Text, View } from "react-native";

import SafeView from "~/components/SafeView";
import ListChat from "./ListChat";

function Messenger() {
  return (
    <SafeView>
      <Text
        style={{
          textAlign: "center",
          paddingBottom: 10,
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        Nhắn tin
      </Text>
      <ListChat />
    </SafeView>
  );
}

export default Messenger;
