import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Menu from "~/screens/Menu";
import Profile from "~/screens/Profile";

const Stack = createNativeStackNavigator();

function MenuStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default MenuStack;
