import Routes from "./src/routes";
import AuthProvider from "./src/contexts/AuthContext";
import CartProvider from "./src/contexts/CartContext";
import { useFonts, Poppins_700Bold, Poppins_500Medium, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_600SemiBold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <AuthProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </AuthProvider>
  );
}