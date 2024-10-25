import { View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useState, useContext, useEffect } from 'react';
import PopUp from '../../components/PopUp';
import { AuthContext } from '../../contexts/AuthContext';
import PhoneInput from 'react-native-international-phone-number';

export default function UserForm({ route }) {
  const navigation = useNavigation();
  const { element } = route.params;
  const [name, setName] = useState('');
  const [msgPopUp, setMsgPopUp] = useState('');
  const { createProfileUser, globalLoading } = useContext(AuthContext);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [inputValue, setInputValue] = useState('');

  function handleInputValue(phoneNumber) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country) {
    setSelectedCountry(country);
  }

  useEffect(() => {
    if (element) {
      console.log(element);

      setName(element.name);
      setInputValue(element.telephone);
      setSelectedCountry(element.country);
    }
  }, [element]);

  const handleSubmit = () => {
    if (!name || !inputValue || !selectedCountry) {
      setMsgPopUp('Preencha todos os campos');
      setTimeout(() => {
        setMsgPopUp('');
      }, 3000);
      return;
    }
    createProfileUser(name, selectedCountry, inputValue);
    navigation.navigate('Checkout');
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
              value={inputValue}
              placeholder='19 99999 9999'
              onChangePhoneNumber={handleInputValue}
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={handleSelectedCountry}
              phoneInputStyles={{
                container: {
                  backgroundColor: '#f3f3f3',
                  borderWidth: 0,

                },
                flagContainer: {
                  borderTopLeftRadius: 12,
                  borderBottomLeftRadius: 12,
                  backgroundColor: '#f3f3f3',
                  justifyContent: 'center',
                },
                flag: {},
                caret: {
                  color: '#F3F3F3',
                  fontSize: 16,
                },
                divider: {
                  backgroundColor: '#5E5E5E',
                },
                callingCode: {
                  fontFamily: 'Poppins_400Regular',
                  fontSize: 18,
                  color: '#5E5E5E',
                },
                input: {
                  color: '#5E5E5E',
                  fontFamily: 'Poppins_400Regular',
                  fontSize: 18,
                },
              }}
              modalStyles={{
                modal: {
                  backgroundColor: '#fff',
                },
                backdrop: {},
                divider: {
                  backgroundColor: 'transparent',
                },
                countriesList: {},
                searchInput: {
                  borderRadius: 8,
                  borderWidth: 0,
                  borderColor: '#F3F3F3',
                  color: '#5E5E5E',
                  backgroundColor: '#F3F3F3',
                  paddingHorizontal: 12,
                  fontFamily: 'Poppins_400Regular',
                  fontSize: 18,
                  height: 46,
                },
                countryButton: {
                  borderWidth: 0,
                  borderColor: '#F3F3F3',
                  backgroundColor: '#F3F3F3',
                  marginVertical: 4,
                  paddingVertical: 0,
                },
                noCountryText: {},
                noCountryContainer: {},
                flag: {
                  color: '#FFFFFF',
                  fontSize: 20,
                },
                callingCode: {
                  color: '#5E5E5E',
                  fontSize: 16,
                  fontFamily: 'Poppins_400Regular',
                },
                countryName: {
                  color: '#5E5E5E',
                  fontSize: 16,
                  fontFamily: 'Poppins_400Regular',
                },
              }}
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