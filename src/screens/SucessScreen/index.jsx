import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BlobSvg from '../../../assets/images/blob.jsx';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';

export default function Sucess() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Pedido Concluído!</Text>
      </View>
      <Text style={styles.txt}>O seu pedido foi processado com sucesso.</Text>
      <View style={styles.containerIcon}>
        <Ionicons style={styles.icon} name="shield-checkmark-sharp" size={120} color="#fff" />
        <BlobSvg style={styles.blobSvg} />
      </View>
      <View style={styles.containerGFG}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeTab')} style={styles.btn}>
          <Text style={styles.btnTxt}>Voltar para a Área de Produtos</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}