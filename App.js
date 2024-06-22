import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNav from "~/navigation/AppNav";
import { AuthProvider } from "~/Common/AuthProvider";

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

export default App;
