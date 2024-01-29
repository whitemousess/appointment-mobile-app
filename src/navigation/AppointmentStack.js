import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListDoctors from "~/screens/ListDoctors";
import DetailDoctor from "~/screens/DetailDoctor";

const Stack = createNativeStackNavigator();

function AppointmentStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListDoctor" component={ListDoctors} />
      <Stack.Screen name="DetailDoctor" component={DetailDoctor} />
    </Stack.Navigator>
  );
}

export default AppointmentStack;
