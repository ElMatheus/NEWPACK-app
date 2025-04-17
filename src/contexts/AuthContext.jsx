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
        const isLogged = await axios.post(`${apiURL}/auth/refresh`, {
          refresh_token: JSON.parse(storageToken)
        });
        if (isLogged.status === 200) {
          const userId = isLogged.data.user_id;
          const token = isLogged.data.token;
          await getUserById(userId, token);
          setAcessToken(token);
          await AsyncStorage.setItem('@asyncStorage:refreshToken', JSON.stringify(isLogged.data.refresh_token));
        }
      } catch (error) {
        setPopUpMessage("Faça login novamente");
        setTimeout(() => {
          setPopUpMessage(null);
        }, 3000);
        AsyncStorage.clear();
        setUser(null);
        setAcessToken(null);
      }
    }
    setGlobalLoading(false);
  };

  useEffect(() => {
    loadingStoreData();
  }, []);

  const getUserById = async (id, token) => {
    setGlobalLoading(true);
    try {
      const response = await axios.get(`${apiURL}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUser({
        id: response.data.id,
        name: response.data.name,
        full_name: response.data.full_name,
      });
    } catch (error) {
      console.error('Error in getUserById:', error);
      setPopUpMessage("Não foi possível carregar o usuário");
      setTimeout(() => {
        setPopUpMessage(null);
      }, 3000);
    }
    finally {
      setGlobalLoading(false);
    }
  };

  const signIn = async (name, password) => {
    const isLogged = await axios.post(`${apiURL}/auth/login`, {
      name,
      password,
    });
    if (isLogged.status === 200) {
      const token = isLogged.data.token;
      setAcessToken(token);
      const userId = isLogged.data.user_id;
      await getUserById(userId, token);
      await AsyncStorage.setItem('@asyncStorage:refreshToken', JSON.stringify(isLogged.data.refresh_token));
    }
  }

  const signOut = async () => {
    setGlobalLoading(true);
    try {
      const storageToken = await AsyncStorage.getItem("@asyncStorage:refreshToken");
      await axios.delete(`${apiURL}/auth/refresh`, {
        "refresh_token": JSON.parse(storageToken)
      }, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      })
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

  const getProductsForUser = async (category) => {
    try {
      setGlobalLoading(true);
      if (category == "tudo") {
        const response = await axios.get(`${apiURL}/users/${user.id}/products`, {
          headers: {
            Authorization: `Bearer ${acessToken}`
          }
        });
        return response.data;
      } else {
        const response = await axios.get(`${apiURL}/users/${user.id}/products?category=${category}`, {
          headers: {
            Authorization: `Bearer ${acessToken}`
          }
        });
        return response.data;
      }
    } catch (error) {
      if (error.response.status !== 404) {
        console.error('Error in getProductsForUser:', error);
        setPopUpMessage("Não foi possível carregar os produtos do usuário");
      }
    } finally {
      setGlobalLoading(false);
    }
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
      const response = await axios.get(`${apiURL}/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      }
      );
      return response.data.Address;
    } catch (error) {
      setPopUpMessage("Não foi possível carregar os endereços");
    } finally {
      setGlobalLoading(false);
    }
  };

  const getAddressActiveUser = async () => {
    setGlobalLoading(true);
    try {
      const response = await axios.get(`${apiURL}/users/${user.id}?active=true`, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      }
      );
      return response.data.Address;
    } catch (error) {
      console.error('Error in getAddressActiveUser:', error);
      setPopUpMessage("Erro ao carregar o endereço ativo");
    } finally {
      setGlobalLoading(false);
    }
  };

  const updateAddress = async (id, address) => {
    setGlobalLoading(true);
    try {
      await axios.put(`${apiURL}/address/${id}`, address, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      });
    } catch (error) {
      if (error.response.status === 400) {
        if (error.response.data.message == "Cannot deactivate the only active address. User must have exactly one active address.") {
          setPopUpMessage("Não é possível desativar o único endereço ativo");
          return;
        }
        if (error.response.data.message == "body/cep CEP must be 8 characters long") {
          setPopUpMessage("CEP inválido");
          return;
        }
      }
      setPopUpMessage("Não foi possível atualizar o endereço");
    } finally {
      setGlobalLoading(false);
    }
  };

  const addAddress = async (address) => {
    setGlobalLoading(true);
    try {
      await axios.post(`${apiURL}/address`, {
        "user_id": user.id,
        "cep": address.cep,
        "street": address.street,
        "number": Number(address.number),
        "complement": address.complement ? address.complement : undefined,
        "city": address.city,
        "neighborhood": address.neighborhood ? address.neighborhood : undefined,
        "state": address.state,
      }, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      }
      );
    } catch (error) {
      if (error.response.status === 400) {
        if (error.response.data.message == "body/cep CEP must be 8 characters long") {
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
      await axios.delete(`${apiURL}/address/${id}`, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      });
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
        "status": "Concluído",
        "description": desc,
        "installment": installment
      }, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      });
      return response.data.data;
    } catch (error) {
      setPopUpMessage("Não foi possível criar o pedido");
    } finally {
      setGlobalLoading(false);
    }
  };

  const updateOrderStatusInvalid = async (id) => {
    setGlobalLoading(true);
    try {
      await axios.put(`${apiURL}/orders/${id}`, {
        "status": "Inválido",
      }, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      });
    } catch (error) {
      setPopUpMessage("Não foi possível atualizar o status do pedido");
    } finally {
      setGlobalLoading(false);
    }
  };

  const createOrderItem = async (orderItem) => {
    setGlobalLoading(true);
    try {
      const response = await axios.post(`${apiURL}/orders_details`, orderItem, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      });
      return response.data.data;
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
      const response = await axios.post(`${apiURL}/email/${orderId}`, {
        name: parsedProfileData.name,
        telephone: `${parsedProfileData.country.callingCode} ${parsedProfileData.telephone}`
      }, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      });
      return response.data;
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
      const response = await axios.get(`${apiURL}/orders_details/${id}`, {
        headers: {
          Authorization: `Bearer ${acessToken}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error in getOrderDetailsById:', error);
      setPopUpMessage("Não foi possível carregar os detalhes do pedido");
    } finally {
      setGlobalLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ setUser, user, signIn, signOut, globalLoading, popUpMessage, setPopUpMessage, getProductsForUser, getProductById, createProfileUser, getProfileFromAsyncStorage, clearProfileFromAsyncStorage, getAddressesUser, getAddressActiveUser, updateAddress, addAddress, removeAddress, createOrder, createOrderItem, sendEmail, loadingStoreData, getOrderDetailsById, updateOrderStatusInvalid }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;