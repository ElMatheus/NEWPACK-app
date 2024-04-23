import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts, Poppins_700Bold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import styles from './styles';

export default function Login() {
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
            <TextInput placeholder='Insira seu nome' style={styles.inputTxt} />
          </View>
          <View style={styles.inputContainer}>
            <Icon color={"#b7b7b7"} name='key' size={18} />
            <TextInput placeholder='Insira sua senha' style={styles.inputTxt} />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTxt}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}