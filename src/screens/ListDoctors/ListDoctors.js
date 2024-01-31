import { StatusBar, Text, View } from "react-native";
import HeaderScreen from "~/components/HeaderScreen";
import ListItem from "./ListItem";
import Diseases from "./Diseases";
import { useState } from "react";

function ListDoctors() {
  const [visibleHeader, setVisibleHeader] = useState(false);

  const onScroll = (e) => {
    const location = e.nativeEvent.contentOffset.y;
    if (location > 130) {
      setVisibleHeader(true);
    } else {
      setVisibleHeader(false);
    }
  };

  return (
    <View
      style={{
        marginBottom: (visibleHeader && StatusBar.currentHeight + 100),
      }}
    >
      {!visibleHeader && <HeaderScreen />}
      <View
        style={{ paddingTop: (visibleHeader && StatusBar.currentHeight)}}
      >
        <Diseases />
      </View>
      <ListItem onScroll={onScroll} />
    </View>
  );
}

export default ListDoctors;
