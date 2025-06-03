/**
 * Desenvolvido por Matheus Gomes - [https://github.com/ElMatheus | matheusgomesgoncalves.564@gmail.com]
 * Projeto: NEWPACK-APP
 * Data de criação: 2024-2025
 */

import Routes from "./src/routes";
import AuthProvider from "./src/contexts/AuthContext";
import CartProvider from "./src/contexts/CartContext";
import GlobalLoading from "./src/components/GlobalLoading";
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <GlobalLoading />;
  }
  return (
    <AuthProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </AuthProvider>
  );
}