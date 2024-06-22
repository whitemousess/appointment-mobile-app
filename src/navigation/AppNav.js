import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import { AuthContext } from "~/Common/AuthProvider";
import Authorization from "./Authorization";
import AuthStack from "./AuthStack";
import { ActivityIndicator, View } from "react-native";
function AppNav() {
  const { token, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <>
      <NavigationContainer>
        {token ? <Authorization /> : <AuthStack />}
      </NavigationContainer>
      <Toast />
    </>
  );
}

export default AppNav;
