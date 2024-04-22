import { View, Text, Image } from 'react-native';

import Title from '../../components/Title';

import styles from './styles';

export default function Login() {
  return (
    <View style={styles.containerLogin}>
      <View style={styles.container}>
        <Image style={{ width: 90, height: 60 }} source={require('../../../assets/images/newpack-logo.png')} />
        <Text style={styles.title}>Bem Vindo!</Text>
      </View>
    </View>
  )
}