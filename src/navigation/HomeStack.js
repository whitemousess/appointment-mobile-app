import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Chat from "~/screens/Chat";
import DetailDoctor from "~/screens/DetailDoctor";
import Home from "~/screens/Home";
import Profile from "~/screens/Profile";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailDoctor" component={DetailDoctor} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default HomeStack;
