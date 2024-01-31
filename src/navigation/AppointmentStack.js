import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListDoctors from "~/screens/ListDoctors";
import DetailDoctor from "~/screens/DetailDoctor";
import Appointment from "~/screens/Appointment";
import DetailChat from "~/screens/DetailChat";

const Stack = createNativeStackNavigator();

function AppointmentStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListDoctor" component={ListDoctors} />
      <Stack.Screen name="DetailDoctor" component={DetailDoctor} />
      <Stack.Screen name="Appointment" component={Appointment} />
      <Stack.Screen name="DetailChat" component={DetailChat} />
    </Stack.Navigator>
  );
}

export default AppointmentStack;
