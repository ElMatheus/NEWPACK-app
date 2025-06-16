import { useState, useContext, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '../../contexts/AuthContext';
import PopUp from '../../components/PopUp';
import PopUp2 from '../../components/PopUp2';
import styles from './styles';
import { version } from '../../../package.json';
import GlobalLoading from '../../components/GlobalLoading';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [popUp, setPopUp] = useState(null);
  const [popUp2, setPopUp2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { signIn, popUpMessage, globalLoading } = useContext(AuthContext);

  const handleLogin = async () => {
    setLoading(true);
    try {
      if (name && password) {
        await signIn(name, password);
      } else {
        setPopUp('Preencha todos os campos!');
        setTimeout(() => setPopUp(null), 3000);
      }
    } catch (error) {
      if (!error.response) {
        setPopUp('Erro de conexão com o servidor');
        setTimeout(() => setPopUp(null), 3000);
      } else if (error.response.data.error === "Invalid credentials") {
        setPopUp2(error.response.data.message);
      } else {
        setPopUp('Erro interno do servidor');
        setTimeout(() => setPopUp(null), 3000);
      }
    }
    setLoading(false);
  };

  const handleHelp = () => {
    navigation.navigate('Help');
  }

  useEffect(() => {
    setPopUp(popUpMessage);
  }, [popUpMessage]);

  return (
    <>
      {globalLoading ? (
        <GlobalLoading />
      ) : (
        <View style={styles.container}>
          <View style={styles.popUpContainer}>
            {popUp && <PopUp message={popUp} />}
          </View>
          <View style={styles.containerImage}>
            <Image
              style={{ width: 160, height: 110 }}
              source={require('../../../assets/images/newpack-logo.png')}
            />
          </View>
          <View style={styles.containerLogin}>
            <View style={styles.containerInputs}>
              <View style={styles.inputContainer}>
                <Icon color="#b7b7b7" name="user-check" size={18} />
                <TextInput
                  onChangeText={setName}
                  value={name}
                  placeholder="Insira seu nome"
                  style={styles.inputTxt}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon color="#b7b7b7" name="key" size={18} />
                <TextInput
                  onChangeText={setPassword}
                  value={password}
                  placeholder="Insira sua senha"
                  secureTextEntry={!showPassword}
                  style={styles.inputTxt}
                />
                <TouchableOpacity
                  style={styles.showPasswordIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Icon
                    name={showPassword ? 'eye-slash' : 'eye'}
                    size={18}
                    color="#b7b7b7"
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={handleLogin} style={styles.button}>
                {loading ? <ActivityIndicator size="large" color="#fff" /> : <Text style={styles.buttonTxt}>Entrar</Text>}
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.helpText}>
                Está precisando de ajuda?{' '}
                <Text onPress={handleHelp} style={{ color: '#4B6584' }}>
                  Clique aqui
                </Text>
              </Text>
              <Text style={styles.versionText}>Versão {version}</Text>
            </View>
          </View>
          {popUp2 && <PopUp2 user={name} message={popUp2} exitPopUp={setPopUp2} />}
        </View>
      )
      }
    </>
  );
}