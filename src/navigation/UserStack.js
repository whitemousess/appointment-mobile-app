import { useContext, useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, FontAwesome, Fontisto } from "@expo/vector-icons";

import MenuStack from "./MenuStack";
import HomeStack from "./HomeStack";
import AppointmentStack from "./AppointmentStack";
import { AuthContext } from "~/shared/AuthProvider";
import History from "~/screens/History";
import ListAppointment from "~/screens/ListAppointment";
import { Keyboard, Platform } from "react-native";

const Tab = createBottomTabNavigator();

function AppStack() {
  const { doctor } = useContext(AuthContext);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    if(Platform.OS === "android"){
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardVisible(true);
        }
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible(false);
        }
      );
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: isKeyboardVisible ? 0 : 60, // Ẩn bottom tab khi bàn phím xuất hiện
        },
        tabBarInactiveTintColor: "#000",
        tabBarActiveTintColor: "#3468C0",
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

      {doctor && (
        <Tab.Screen
          name="ListAppointment"
          component={ListAppointment}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="calendar" size={size} color={color} />
            ),
          }}
        />
      )}

      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" size={size} color={color} />
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
