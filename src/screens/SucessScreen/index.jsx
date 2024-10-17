import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Sucess() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedido Concluído!</Text>
      <Text style={styles.txt}>O seu pedido foi processado com sucesso.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btn}>
        <Text style={styles.btnTxt}>Voltar para a Área de Produtos</Text>
      </TouchableOpacity>
    </View>
  )
}