import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeAdmin from "~/screens/Admin/HomeAdmin";

const Stack = createNativeStackNavigator();

function AdminStack() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeAdmin" component={HomeAdmin} />
      </Stack.Navigator>
    </>
  );
}

export default AdminStack;
