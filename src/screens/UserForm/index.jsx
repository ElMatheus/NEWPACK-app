import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles';
import PhoneInput from 'react-native-phone-number-input';
import { useNavigation } from '@react-navigation/native';

export default function UserForm() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerIcon} onPress={() => navigation.navigate('Cart')}>
        <AntDesign style={styles.icon} name="left" size={26} color="#000" />
      </TouchableOpacity>
      <View style={styles.containerTxt}>
        <Text style={styles.txt}>Para concluir, precisamos de algumas informações para finalizar seu pedido</Text>
      </View>
      <View style={styles.containerInps}>
        <View>

          <View style={styles.containerInp}>
            <Text style={styles.txtInp}>Nome</Text>
            <TextInput placeholder='José Carlos' style={styles.input} />
          </View>
          <View style={styles.containerInp}>
            <Text style={styles.txtInp}>Telefone</Text>
            <PhoneInput
              defaultCode="BR"
              layout="first"
              placeholder='(99) 99999-9999'
              containerStyle={styles.input}
              textContainerStyle={{ fontSize: 18, fontFamily: 'Poppins_400Regular' }}
              codeTextStyle={{ fontSize: 16, fontFamily: 'Poppins_400Regular', color: '#5E5E5E' }}
              filterProps={{ placeholder: 'Insira o nome do país' }}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}