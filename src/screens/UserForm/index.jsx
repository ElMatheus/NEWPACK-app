import { View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles';
import PhoneInput from 'react-native-phone-number-input';
import { useNavigation } from '@react-navigation/native';
import { useState, useContext, useEffect } from 'react';
import PopUp from '../../components/PopUp';
import { AuthContext } from '../../contexts/AuthContext';

export default function UserForm({ route }) {
  const navigation = useNavigation();
  const { element } = route.params;
  const [name, setName] = useState('');
  const [phoneFormatted, setPhoneFormatted] = useState('');
  const [phone, setPhone] = useState(null);
  const [msgPopUp, setMsgPopUp] = useState('');
  const { createProfileUser, globalLoading } = useContext(AuthContext);

  useEffect(() => {
    if (element) {
      setName(element.name);
      setPhoneFormatted(element.telephone);
      const removeFormatting = element.telephone = element.telephone.replace('+55', '');
      setPhone(removeFormatting);
    }
  }, [element]);

  const handleSubmit = () => {
    if (!name || !phone) {
      setMsgPopUp('Preencha todos os campos');
      setTimeout(() => {
        setMsgPopUp('');
      }, 3000);
      return;
    }
    createProfileUser(name, phoneFormatted);
    navigation.navigate('Checkout');
  };

  const handlePhoneChange = (text) => {
    if (text.length <= 11) {
      const removeFormatting = text.replace(/[^0-9]/g, '');
      setPhone(removeFormatting);
    }

  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        {msgPopUp ? <PopUp message={msgPopUp} /> : null}
      </View>
      <TouchableOpacity style={styles.containerIcon} onPress={() => navigation.goBack()}>
        <AntDesign style={styles.icon} name="left" size={26} color="#000" />
      </TouchableOpacity>
      <View style={styles.containerTxt}>
        <Text style={styles.txt}>Para concluir, precisamos de algumas informações para finalizar seu pedido</Text>
      </View>
      <View style={styles.containerInps}>
        <View>
          <View style={styles.containerInp}>
            <Text style={styles.txtInp}>Nome</Text>
            <TextInput onChangeText={setName} placeholder='José Carlos' style={styles.input} value={name} />
          </View>
          <View style={styles.containerInp}>
            <Text style={styles.txtInp}>Telefone</Text>
            <PhoneInput
              textInputProps={{ value: phone }}
              defaultValue={phone}
              onChangeText={(text) => handlePhoneChange(text)}
              onChangeFormattedText={(text) => setPhoneFormatted(text)}
              defaultCode="BR"
              layout="first"
              placeholder='99999999999'
              containerStyle={styles.input}
              textContainerStyle={{ fontSize: 18, fontFamily: 'Poppins_400Regular' }}
              codeTextStyle={{ fontSize: 16, fontFamily: 'Poppins_400Regular', color: '#5E5E5E' }}
              filterProps={{ placeholder: 'Insira o nome do país' }}
            />
          </View>
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
          {
            globalLoading ? <ActivityIndicator size="large" color={"#fff"} /> : <Text style={styles.txtBtn}>Continuar</Text>
          }

        </TouchableOpacity>
      </View>
    </View>
  )
}