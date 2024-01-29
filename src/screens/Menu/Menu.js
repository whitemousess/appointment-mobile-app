import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import HeaderScreen from "~/components/HeaderScreen";
import SafeView from "~/components/SafeView";
import { AuthContext } from "~/shared/AuthProvider";

function Menu() {
  const { logOut } = useContext(AuthContext);

  return (
    <SafeView>
      <TouchableOpacity onPress={logOut}>
        <Text>logOut</Text>
      </TouchableOpacity>
    </SafeView>
  );
}

export default Menu;
