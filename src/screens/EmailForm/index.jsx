import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useState, useContext, useEffect } from 'react';
import PopUp from '../../components/PopUp';
import PopUp2 from '../../components/PopUp2';
import { AuthContext } from '../../contexts/AuthContext';

export default function EmailForm() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [msgPopUp, setMsgPopUp] = useState(null);
  const [errorPopUp, setErrorPopUp] = useState(null);
  const { user, globalLoading, updateEmail, popUpMessage } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
    }
  }, [user]);

  useEffect(() => {
    if (popUpMessage) {
      if (popUpMessage == 'E-mail inválido') {
        setMsgPopUp('E-mail inválido');
        setTimeout(() => {
          setMsgPopUp('');
        }, 3000);
      } else {
        setErrorPopUp(popUpMessage);
      }
    }
  }, [popUpMessage]);

  const handleSubmit = async () => {
    if (!email) {
      setMsgPopUp('Preencha todos os campos');
      setTimeout(() => {
        setMsgPopUp('');
      }, 3000);
      return;
    }

    if (email == user.email) {
      setMsgPopUp('O e-mail informado é igual ao que já está cadastrado');
      setTimeout(() => {
        setMsgPopUp('');
      }, 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMsgPopUp('E-mail inválido');
      setTimeout(() => {
        setMsgPopUp('');
      }, 3000);
      return;
    }
    const sucess = await updateEmail(email);
    if (sucess) {
      navigation.goBack();
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          {msgPopUp ? <PopUp message={msgPopUp} /> : null}
        </View>
        <TouchableOpacity style={styles.containerIcon} onPress={() => navigation.goBack()}>
          <AntDesign style={styles.icon} name="left" size={26} color="#000" />
        </TouchableOpacity>
        <View style={styles.containerTxt}>
          <Text style={styles.txt}>Para continuar, precisamos que você insira um e-mail válido no campo abaixo</Text>
        </View>
        <View style={styles.containerInps}>
          <View>
            <View style={styles.containerInp}>
              <Text style={styles.txtInp}>Email</Text>
              <TextInput keyboardType='email-address' onChangeText={setEmail} placeholder='vendas@suaempresa.com' style={styles.input} value={email} />
            </View>
          </View>
          <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
            {
              globalLoading ? <ActivityIndicator size="large" color={"#fff"} /> : <Text style={styles.txtBtn}>Continuar</Text>
            }
          </TouchableOpacity>
        </View>
      </View>
      {errorPopUp ? <PopUp2 message={errorPopUp} exitPopUp={setErrorPopUp} /> : null}
    </ScrollView>
  )
}