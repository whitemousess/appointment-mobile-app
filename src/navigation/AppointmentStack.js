import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListDoctors from "~/screens/ListDoctors";
import DetailDoctor from "~/screens/DetailDoctor";
import Appointment from "~/screens/Appointment";
import DetailChat from "~/screens/DetailChat";
import PredictDiseases from "~/screens/PredictDiseases";
import ListPredictDiseases from "~/screens/ListPredictDiseases";

const Stack = createNativeStackNavigator();

function AppointmentStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListDoctor" component={ListDoctors} />
      <Stack.Screen name="DetailDoctor" component={DetailDoctor} />
      <Stack.Screen name="Appointment" component={Appointment} />
      <Stack.Screen name="DetailChat" component={DetailChat} />
      <Stack.Screen name="PredictDiseases" component={PredictDiseases} />
      <Stack.Screen name="ListPredictDiseases" component={ListPredictDiseases} />
    </Stack.Navigator>
  );
}

export default AppointmentStack;
