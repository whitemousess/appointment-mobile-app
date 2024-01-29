import { useContext } from "react";

import { AuthContext } from "~/shared/AuthProvider";
import AdminStack from "./AdminStack";
import UserStack from "./UserStack";

function Authorization() {
  const { admin } = useContext(AuthContext);

  return <>{admin ? <AdminStack /> : <UserStack />}</>;
}

export default Authorization;
