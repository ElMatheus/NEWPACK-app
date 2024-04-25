import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts, Poppins_700Bold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import styles from './styles';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const apiURL = process.env.EXPO_PUBLIC_API_URL;

  const { auth, setAuth, setUser, setToken } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    if (name && password) {
      const isLogged = await axios.post(`${apiURL}/users/login/ `, {
        name: name,
        password: password,
      });
      if (isLogged) {
        setAuth(true);

        setUser(isLogged.data.user);
        setToken(isLogged.data.token);
      } else {
        alert('Erro ao logar!');
      }
    }
  }

  let [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.containerLogin}>
      <View style={styles.container}>
        <Image style={{ width: 130, height: 80 }} source={require('../../../assets/images/newpack-logo.png')} />
        <Text style={styles.title}>Entre em seu perfil!</Text>
      </View>
      <View style={styles.containerInps}>

        <View style={styles.containerInps2}>
          <View style={styles.inputContainer}>
            <Icon color={"#b7b7b7"} name='user-check' size={18} />
            <TextInput onChangeText={setName} value={name} placeholder='Insira seu nome' style={styles.inputTxt} />
          </View>
          <View style={styles.inputContainer}>
            <Icon color={"#b7b7b7"} name='key' size={18} />
            <TextInput onChangeText={setPassword} value={password} placeholder='Insira sua senha' style={styles.inputTxt} />
          </View>
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonTxt}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}