import AppNav from "~/navigation/AppNav";
import { AuthProvider } from "~/shared/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}

export default App;
