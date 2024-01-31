import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Chat from "~/screens/Chat";
import DetailChat from "~/screens/DetailChat";
import DetailDoctor from "~/screens/DetailDoctor";
import DetailPost from "~/screens/DetailPost";
import Home from "~/screens/Home";
import ListDoctors from "~/screens/ListDoctors";
import Profile from "~/screens/Profile";
import Appointment from "~/screens/Appointment";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailPost" component={DetailPost} />
      <Stack.Screen name="DetailDoctor" component={DetailDoctor} />
      <Stack.Screen name="ListDoctor" component={ListDoctors} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="DetailChat" component={DetailChat} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Appointment" component={Appointment} />
    </Stack.Navigator>
  );
}

export default HomeStack;
