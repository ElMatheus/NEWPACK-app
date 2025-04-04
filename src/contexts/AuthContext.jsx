import axios from "axios";
import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const apiURL = process.env.EXPO_PUBLIC_API_URL;
  const [acessToken, setAcessToken] = useState('');
  const [user, setUser] = useState('');
  const [globalLoading, setGlobalLoading] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState(null);

  const loadingStoreData = async () => {
    setGlobalLoading(true);
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
        setPopUpMessage("Faça login novamente");
        setTimeout(() => {
          setPopUpMessage(null);
        }, 3000);
        AsyncStorage.clear();
      }
    }
    setGlobalLoading(false);
  };

  useEffect(() => {
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
      await AsyncStorage.setItem('@asyncStorage:refreshToken', JSON.stringify(isLogged.data.refreshToken.id));
    }
  }

  const signOut = async () => {
    setGlobalLoading(true);
    try {
      const storageToken = await AsyncStorage.getItem("@asyncStorage:refreshToken");
      await axios.delete(`${apiURL}/users/refresh/${JSON.parse(storageToken)}`)
      delete axios.defaults.headers.common["Authorization"];
      AsyncStorage.clear();
      setUser(null);
      setAcessToken(null);
    } catch (error) {
      setPopUpMessage("Não foi possível fazer logout");
      console.log(error);

    } finally {
      setGlobalLoading(false);
    }
  };

  const getUsers = async () => {
    setGlobalLoading(true);
    const response = await axios.get(`${apiURL}/users`, {
      headers: {
        Authorization: `Bearer ${acessToken}`
      }
    });
    setGlobalLoading(false);
    return response.data.users;
  };

  const getProductsForUser = async (category) => {
    setGlobalLoading(true);
    const response = await axios.get(`${apiURL}/orders/user/${user.id}?category=${category}&unique=true`, {
      headers: {
        Authorization: `Bearer ${acessToken}`
      }
    });
    setGlobalLoading(false);
    return response.data;
  };

  const createProfileUser = async (name, country, telephone) => {
    setGlobalLoading(true);
    const profile = {
      name: name,
      country: country,
      telephone: telephone,
    };
    await AsyncStorage.setItem('@asyncStorage:profile', JSON.stringify(profile));
    setGlobalLoading(false);
  }

  const getProfileFromAsyncStorage = async () => {
    const profile = await AsyncStorage.getItem('@asyncStorage:profile');
    return profile;
  };

  const clearProfileFromAsyncStorage = async () => {
    await AsyncStorage.clear();
  };

  const getAddressesUser = async () => {
    setGlobalLoading(true);
    try {
      const response = await axios.get(`${apiURL}/users/address/${user.id}`, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      }
      );
      return response.data.address;
    } catch (error) {
      setPopUpMessage("Não foi possível carregar os endereços");
    } finally {
      setGlobalLoading(false);
    }
  };

  const getAddressActiveUser = async () => {
    setGlobalLoading(true);
    try {
      const response = await axios.get(`${apiURL}/users/address/${user.id}?active=true`, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      }
      );
      return response.data.address;
    } catch (error) {
      if (error.response.status === 404) {
        return null;
      }
    } finally {
      setGlobalLoading(false);
    }
  };

  const updateAddress = async (id, address) => {
    setGlobalLoading(true);
    try {
      await axios.put(`${apiURL}/users/address/${id}`, address);
    } catch (error) {
      setPopUpMessage("Não foi possível atualizar o endereço");
    } finally {
      setGlobalLoading(false);
    }
  };

  const addAddress = async (address) => {
    setGlobalLoading(true);
    try {
      await axios.post(`${apiURL}/users/address/${user.id}`, address, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      }
      );
    } catch (error) {
      if (error.response.status === 400) {
        if (error.response.data.message === "Cep inválido") {
          setPopUpMessage("CEP inválido");
        } else {
          setPopUpMessage("Preencha todos os campos obrigatórios");
        }
      } else {
        setPopUpMessage("Não foi possível adicionar o endereço");
      }
    } finally {
      setGlobalLoading(false);
    }
  };

  const removeAddress = async (id) => {
    setGlobalLoading(true);
    try {
      await axios.delete(`${apiURL}/users/address/${id}`);
    } catch (error) {
      setPopUpMessage("Não foi possível excluir o endereço");
    } finally {
      setGlobalLoading(false);
    }
  };

  const createOrder = async (desc, installment) => {
    setGlobalLoading(true);
    try {
      const response = await axios.post(`${apiURL}/orders`, {
        "client_id": user.id,
        "status": "Invalido",
        "description": desc,
        "installment": installment
      });
      return response.data;
    } catch (error) {
      setPopUpMessage("Não foi possível criar o pedido");
    } finally {
      setGlobalLoading(false);
    }
  };

  const createOrderItem = async (orderItem) => {
    setGlobalLoading(true);
    try {
      await axios.post(`${apiURL}/orders/details`, orderItem, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      });
    } catch (error) {
      setPopUpMessage("Não foi possível criar o item do pedido");
    } finally {
      setGlobalLoading(false);
    }
  };

  const sendEmail = async (orderId) => {
    setGlobalLoading(true);
    try {
      const profileData = await getProfileFromAsyncStorage();
      const parsedProfileData = JSON.parse(profileData);
      await axios.post(`${apiURL}/emails/${orderId}`, {
        name: parsedProfileData.name,
        telephone: `${parsedProfileData.country.callingCode} ${parsedProfileData.telephone}`
      });
    } catch (error) {
      setPopUpMessage("Não foi possível enviar o e-mail");
    } finally {
      setGlobalLoading(false);
    }
  };

  const getProductById = async (id) => {
    setGlobalLoading(true);
    try {
      const response = await axios.get(`${apiURL}/products/${id}`);
      return response.data.product;
    } catch (error) {
      console.error('Error in getProductById:', error);
      setPopUpMessage("Não foi possível carregar o produto pelo id");
    } finally {
      setGlobalLoading(false);
    }
  };

  const getOrderDetailsById = async (id) => {
    setGlobalLoading(true);
    try {
      const response = await axios.get(`${apiURL}/orders/details/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error in getOrderDetailsById:', error);
      setPopUpMessage("Não foi possível carregar os detalhes do pedido");
    } finally {
      setGlobalLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ setUser, user, signIn, signOut, getUsers, globalLoading, popUpMessage, setPopUpMessage, getProductsForUser, getProductById, createProfileUser, getProfileFromAsyncStorage, clearProfileFromAsyncStorage, getAddressesUser, getAddressActiveUser, updateAddress, addAddress, removeAddress, createOrder, createOrderItem, sendEmail, loadingStoreData, getOrderDetailsById }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;