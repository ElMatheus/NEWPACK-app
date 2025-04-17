import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useContext, useState } from 'react';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/AuthContext';
import PopUp from '../../components/PopUp';

const CreateAddress = ({ modalVisible, setModalVisible }) => {
  const { addAddress } = useContext(AuthContext);
  const [cep, setCep] = useState(null);
  const [street, setStreet] = useState(null);
  const [number, setNumber] = useState(null);
  const [complement, setComplement] = useState(null);
  const [city, setCity] = useState(null);
  const [neighborhood, setNeighborhood] = useState(null);
  const [state, setState] = useState(null);
  const [msgError, setMsgError] = useState(null);

  const handleAddAddress = async () => {
    if (street && cep && city && state && number) {
      const address = {
        cep: cep,
        street: street,
        number: number,
        complement: complement,
        city: city,
        neighborhood: neighborhood,
        state: state,
      };
      await addAddress(address);
      setModalVisible(false);
      clearFields();
    } else {
      setMsgError('Preencha todos os campos');
      setTimeout(() => {
        setMsgError(null);
      }, 3000);
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
    clearFields();
  };

  const handleStateChange = (text) => {
    if (text.length <= 2) {
      setState(text.toUpperCase());
    }
  };

  const handleCepChange = (text) => {
    if (text.length <= 8) {
      setCep(text);
    }
  };

  const handleCityChange = (text) => {
    const words = text.split(' ');
    const capitalizedWords = words.map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    );
    setCity(capitalizedWords.join(' '));
  };

  const clearFields = () => {
    setStreet(null);
    setCep(null);
    setCity(null);
    setState(null);
    setComplement(null);
    setNumber(null);
  };

  return (
    <Modal transparent={true} animationType="slide" visible={modalVisible}>
      <TouchableOpacity style={styles.modalBackground} onPress={() => setModalVisible(false)} activeOpacity={1}>
        {msgError && <PopUp message={msgError} />}
        <TouchableWithoutFeedback>
          <View style={styles.containerModal}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              <Text style={styles.title}>Adicionar Endereço</Text>
              <View style={styles.containerCards}>
                <View style={styles.containerInps}>
                  <View style={styles.inputContainer}>
                    <Feather name="map-pin" size={24} color="#6B6B6B" style={styles.icon} />
                    <TextInput
                      style={styles.input}
                      placeholder="Rua"
                      value={street}
                      onChangeText={setStreet}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <MaterialIcons name="maps-home-work" size={19} color="#6B6B6B" style={styles.icon} />
                    <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      placeholder="CEP"
                      value={cep}
                      onChangeText={handleCepChange}
                    />
                  </View>
                  <View style={styles.containerRow}>
                    <View style={styles.inputContainer2}>
                      <SimpleLineIcons name="map" size={19} color="#6B6B6B" style={styles.icon} />
                      <TextInput
                        style={styles.input}
                        placeholder="Cidade"
                        value={city}
                        onChangeText={handleCityChange}
                      />
                    </View>
                    <View style={styles.inputContainer2}>
                      <Feather name="globe" size={19} color="#6B6B6B" style={styles.icon} />
                      <TextInput
                        style={styles.input}
                        placeholder="Estado"
                        value={state}
                        onChangeText={handleStateChange}
                      />
                    </View>
                  </View>
                  <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="home-group" size={19} color="#6B6B6B" style={styles.icon} />
                    <TextInput
                      style={styles.input}
                      placeholder="Bairro"
                      value={neighborhood}
                      onChangeText={setNeighborhood}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Feather name="grid" size={19} color="#6B6B6B" style={styles.icon} />
                    <TextInput
                      style={styles.input}
                      placeholder="Complemento"
                      value={complement}
                      onChangeText={setComplement}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="keyboard" size={19} color="#6B6B6B" style={styles.icon} />
                    <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      placeholder="Número"
                      value={number}
                      onChangeText={setNumber}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
            <View style={styles.containerBtn}>
              <TouchableOpacity style={styles.btn} onPress={handleAddAddress}>
                <Text style={styles.txtBtn}>Adicionar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnRmv} onPress={handleCancel}>
                <Text style={styles.txtBtn}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal >
  )
}

export default CreateAddress