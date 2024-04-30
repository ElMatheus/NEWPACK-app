import axios from "axios";
import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const apiURL = process.env.EXPO_PUBLIC_API_URL;
  const [user, setUser] = useState('');

  useEffect(() => {
    const loadingStoreData = async () => {
      const storageUser = await AsyncStorage.getItem("@asyncStorage:user");
      const storageToken = await AsyncStorage.getItem("@asyncStorage:token");

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
      }
    };
    loadingStoreData();
  }, []);

  const signIn = async (name, password) => {
    const isLogged = await axios.post(`${apiURL}/users/login/ `, {
      name: name,
      password: password,
    });
    if (isLogged) {
      setUser(isLogged.data.user);
      axios.defaults.headers.common['Authorization'] = `Bearer ${isLogged.data.token}`;
      await AsyncStorage.setItem('@asyncStorage:user', JSON.stringify(isLogged.data.user));
      await AsyncStorage.setItem('@asyncStorage:token', isLogged.data.token);
    }
  }

  const signOut = () => {
    delete axios.defaults.headers.common["Authorization"];
    AsyncStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ setUser, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;