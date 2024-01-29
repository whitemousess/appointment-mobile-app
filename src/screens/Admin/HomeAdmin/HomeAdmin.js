import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import SafeView from "~/components/SafeView";
import { AuthContext } from "~/shared/AuthProvider";

function HomeAdmin() {
  const { logOut } = useContext(AuthContext);

  return (
    <SafeView>
      <Text>Home Admin</Text>
      <TouchableOpacity onPress={logOut}>
        <Text>logOut</Text>
      </TouchableOpacity>
    </SafeView>
  );
}

export default HomeAdmin;
