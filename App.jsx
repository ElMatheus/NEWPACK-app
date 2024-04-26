import Routes from "./src/routes";
import AuthProvider from "./src/contexts/AuthContext";
import { useFonts, Poppins_700Bold, Poppins_500Medium } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}