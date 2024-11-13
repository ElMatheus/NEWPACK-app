import { useState, useContext, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '../../contexts/AuthContext';
import PopUp from '../../components/PopUp';
import PopUp2 from '../../components/PopUp2';
import styles from './styles';
import { ActivityIndicator } from 'react-native';
import { version } from '../../../package.json'; // Import version from package.json

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [popUp, setPopUp] = useState(null);
  const [popUp2, setPopUp2] = useState(null);
  const [loading, setLoading] = useState(false);

  // funcao sign: serve para fazer login
  const { signIn, popUpMessage } = useContext(AuthContext);

  // quando clicar em entrar esta funcao sera acionada
  const handleLogin = async () => {
    // seta o loading para true
    setLoading(true);
    try {
      // verifica se os campos estao preenchidos
      if (name && password) {
        // chama a funcao signIn do AuthContext se estiver tudo preenchido
        await signIn(name, password);
      } else {
        // se nao estiver preenchido, seta um popUp de erro
        setPopUp('Preencha todos os campos!');
        setTimeout(() => {
          setPopUp(null);
        }, 3000);
      }
    } catch (error) {
      // se der erro na requisicao, seta um popUp de erro
      if (error.response) {
        // se a requisicao tiver uma mensagem programada do meu back como: "Usuario nao encontrado" seta um popUp2 com a mensagem que nela esta
        setPopUp2(error.response.data.message);
      } else {
        // ai se nao tiver uma mensagem programada, seta um popUp de erro interno do servidor
        setPopUp('Erro interno do servidor');
        setTimeout(() => {
          setPopUp(null);
        }, 3000);
      }
    }
    // seta o loading para false assim fazendo parar de carregar
    setLoading(false);
  }

  useEffect(() => {
    // se o popUpMessage mudar, seta o popUp com a mensagem que esta nele
    setPopUp(popUpMessage);
  }, [popUpMessage]);

  return (
    <>
      <View>
        {popUp && <PopUp message={popUp} />}
      </View>
      <View style={styles.container}>
        <View style={styles.containerImg}>
          <Image style={{ width: 160, height: 110 }} source={require('../../../assets/images/newpack-logo.png')} />
        </View>
        <View style={styles.containerLogin}>
          <View style={styles.containerInps}>
            <View style={styles.containerInps2}>
              <View style={styles.inputContainer}>
                <Icon color={"#b7b7b7"} name='user-check' size={18} />
                <TextInput onChangeText={setName} value={name} placeholder='Insira seu nome' style={styles.inputTxt} />
              </View>
              <View style={styles.inputContainer}>
                <Icon color={"#b7b7b7"} name='key' size={18} />
                <TextInput onChangeText={setPassword} value={password} placeholder='Insira sua senha' secureTextEntry={true} style={styles.inputTxt} />
              </View>
            </View>
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              {
                loading ? <ActivityIndicator size="large" color={"#fff"} /> : <Text style={styles.buttonTxt}>Acessar</Text>
              }
            </TouchableOpacity>
          </View>
        </View>

        {popUp2 && <PopUp2 user={name} message={popUp2} exitPopUp={setPopUp2} />}
      </View>
    </>

  )
}