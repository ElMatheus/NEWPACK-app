import { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '../../contexts/AuthContext';
import PopUp from '../../components/PopUp';
import PopUp2 from '../../components/PopUp2';
import styles from './styles';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [popUp, setPopUp] = useState(null);
  const [popUp2, setPopUp2] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signIn, user, setUser } = useContext(AuthContext);

  const handleLogin = async () => {
    setLoading(true);
    try {
      if (name && password) {
        await signIn(name, password);
      } else {
        setPopUp('Preencha todos os campos!');
        setTimeout(() => {
          setPopUp(null);
        }, 3000);
      }
    } catch (error) {
      if (error.response) {
        setPopUp2(error.response.data.message);
      } else {
        setPopUp('Erro interno do servidor');
        setTimeout(() => {
          setPopUp(null);
        }, 3000);
      }
    }
    setLoading(false);
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
          {
            loading ? <Icon color={"#FFF"} name='spinner' size={18} /> : <Text style={styles.buttonTxt}>Entrar</Text>
          }
        </TouchableOpacity>
      </View>
      {popUp && <PopUp message={popUp} />}
      {popUp2 && <PopUp2 user={name} message={popUp2} exitPopUp={setPopUp2} />}
    </View>
  )
}