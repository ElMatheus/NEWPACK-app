/**
 * Desenvolvido por Matheus Gomes - [https://github.com/ElMatheus | matheusgomesgoncalves.564@gmail.com]
 * Projeto: NEWPACK-APP
 * Data de criação: 2024-2025
 */

import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import PrivateTab from "./PrivateTab.routes";
import PublicTab from "./PublicTab.routes";
import { AuthContext } from "../contexts/AuthContext";
import { linking } from "./linking";

function Routes() {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer linking={linking}>
      {user ? <PrivateTab /> : <PublicTab />}
    </NavigationContainer>
  );
}

export default Routes;