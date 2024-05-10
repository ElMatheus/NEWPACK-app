import axios from "axios";
import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const apiURL = process.env.EXPO_PUBLIC_API_URL;
  const [acessToken, setAcessToken] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    const loadingStoreData = async () => {
      const storageToken = await AsyncStorage.getItem("@asyncStorage:refreshToken");

      if (storageToken) {
        try {
          const isLogged = await axios.post(`${apiURL}/users/refresh`, {
            refreshToken: JSON.parse(storageToken)
          });
          if (isLogged) {
            const userById = await axios.get(`${apiURL}/users/${isLogged.data.user_id}`, {
              headers: {
                Authorization: `Bearer ${isLogged.data.token}`
              }
            });
            setAcessToken(isLogged.data.token);
            const { password, ...userWithoutPassword } = userById.data.user;
            setUser(userWithoutPassword);
          }
        } catch (error) {
          alert('Erro ao carregar usuário');
          AsyncStorage.clear();
        }
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
      setAcessToken(isLogged.data.token);
      const { password, ...userWithoutPassword } = isLogged.data.user;
      setUser(userWithoutPassword);
      console.log(userWithoutPassword);
      await AsyncStorage.setItem('@asyncStorage:refreshToken', JSON.stringify(isLogged.data.refreshToken.id));
    }
  }

  const signOut = () => {
    delete axios.defaults.headers.common["Authorization"];
    AsyncStorage.clear();
    setUser(null);
  };

  const getUsers = async () => {
    const response = await axios.get(`${apiURL}/users`, {
      headers: {
        Authorization: `Bearer ${acessToken}`
      }
    });
    return response.data.users;
  };

  return (
    <AuthContext.Provider value={{ setUser, user, signIn, signOut, getUsers }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;