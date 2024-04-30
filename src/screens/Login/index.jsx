import { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './styles';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, user } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      if (name && password) {
        await signIn(name, password);
      } else {
        alert('Preencha todos os campos!');
        return;
      }

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Aconteceu algum erro inesperado!');
      }
    }
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