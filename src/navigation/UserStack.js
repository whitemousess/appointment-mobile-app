import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Fontisto } from "@expo/vector-icons";

import MenuStack from "./MenuStack";
import HomeStack from "./HomeStack";
import AppointmentStack from "./AppointmentStack";

const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarInactiveTintColor: "#000",
        tabBarActiveTintColor: "#D83752",
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="AppointmentStack"
        component={AppointmentStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="doctor" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="MenuStack"
        component={MenuStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="menu" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppStack;
