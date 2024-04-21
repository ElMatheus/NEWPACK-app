import { useContext } from "react";
import PrivateTab from "./PrivateTab.routes";
import PublicTab from "./PublicTab.routes";
import { AuthContext } from "../contexts/AuthContext";

function Routes() {
  const { auth } = useContext(AuthContext);
  return auth ? <PrivateTab /> : <PublicTab />
}

export default Routes;