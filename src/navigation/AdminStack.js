import { AntDesign, Entypo, FontAwesome6 } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomDrawerContent from "~/components/CustomDrawer";
import AddDoctor from "~/screens/Admin/AddDoctor";
import EditDoctor from "~/screens/Admin/EditDoctor";
import EditUser from "~/screens/Admin/EditUser";

import HomeAdmin from "~/screens/Admin/HomeAdmin";
import ManagerAppointment from "~/screens/Admin/ManagerAppointment";
import ManagerDoctor from "~/screens/Admin/ManagerDoctor";
import ManagerPost from "~/screens/Admin/ManagerPost";
import ManagerUser from "~/screens/Admin/ManagerUser";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DoctorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ManagerDoctor"
        component={ManagerDoctor}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditDoctor"
        component={EditDoctor}
        options={{
          title: "",
          headerBackTitle: "Trở về",
        }}
      />
    </Stack.Navigator>
  );
};

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ManagerUser"
        component={ManagerUser}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditUser"
        component={EditUser}
        options={{
          title: "",
          headerBackTitle: "Trở về",
        }}
      />
    </Stack.Navigator>
  );
};

function AdminStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeAdmin"
        component={HomeAdmin}
        options={{
          title: "Trang chủ",
          headerTitle: "",
          drawerIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="DoctorStack"
        component={DoctorStack}
        options={{
          title: "Bác sĩ",
          headerShown: false,
          drawerIcon: ({ size, color }) => (
            <FontAwesome6 name="user-doctor" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="UserStack"
        component={UserStack}
        options={{
          title: "Người dùng",
          headerShown: false,
          drawerIcon: ({ size, color }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ManagerAppointment"
        component={ManagerAppointment}
        options={{
          title: "Lịch hẹn",
          headerShown: false,
          drawerIcon: ({ size, color }) => (
            <Entypo name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ManagerPost"
        component={ManagerPost}
        options={{
          title: "Bài viết",
          headerShown: false,
          drawerIcon: ({ size, color }) => (
            <AntDesign name="edit" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="AddDoctor"
        component={AddDoctor}
        options={{
          title: "Thêm bác sĩ",
          headerShown: false,
          drawerIcon: ({ size, color }) => (
            <AntDesign name="adduser" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default AdminStack;
