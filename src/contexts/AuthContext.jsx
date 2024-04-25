import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');



  return (
    <AuthContext.Provider value={{ auth, setAuth, setUser, setToken, user, token }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;  