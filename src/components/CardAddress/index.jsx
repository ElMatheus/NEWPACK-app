import { View, Text, TouchableOpacity, TextInput, Switch } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const CardAddress = ({ address, setPopUp }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const [inpStreet, setInpStreet] = useState(address.street);
  const [inpCep, setInpCep] = useState(address.cep);
  const [inpCity, setInpCity] = useState(address.city);
  const [inpState, setInpState] = useState(address.state);
  const [inpComplement, setInpComplement] = useState(address.complement);
  const [inpNumber, setInpNumber] = useState(address.number);
  const [inpActive, setInpActive] = useState(address.active);
  const { updateAddress, removeAddress } = useContext(AuthContext);

  const handleUpdate = async () => {
    if (inpStreet == address.street && inpCep == address.cep && inpCity == address.city && inpState == address.state && inpComplement == address.complement && inpNumber == address.number && inpActive == address.active) {
      setPopUp('Nenhuma alteração foi feita');
      setTimeout(() => {
        setPopUp(null);
      }, 3000);
    } else {
      const addressObj = {
        cep: inpCep,
        street: inpStreet,
        number: inpNumber,
        complement: inpComplement,
        city: inpCity,
        state: inpState,
        active: inpActive
      }
      await updateAddress(address.id, addressObj);
    }
  };

  const handleDelete = async () => {
    await removeAddress(address.id);
  };

  const handleStateChange = (text) => {
    if (text.length <= 2) {
      setInpState(text.toUpperCase());
    }
  };

  const handleCepChange = (text) => {
    if (text.length <= 8) {
      setInpCep(text);
    }
  };

  useEffect(() => {
    setInpStreet(address.street);
    setInpCep(address.cep);
    setInpCity(address.city);
    setInpState(address.state);
    setInpComplement(address.complement);
    setInpNumber(address.number);
    setInpActive(address.active);
  }, [address]);

  return (
    <View style={styles.container}>
      {
        address.active && (
          <View style={styles.containerActive}>
            <Text style={styles.txtActive}>padrão</Text>
          </View>
        )
      }
      <View style={styles.containerAddress}>
        <View style={styles.containerIcon}>
          <MaterialCommunityIcons name="home-map-marker" size={42} color="#F3F3F3" />
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.title}>{address.street}</Text>
          <Text style={styles.txt}>{address.cep}</Text>
          <Text style={styles.txt}>
            {address.city}, {address.state} - {address.number}
          </Text>
          <Text style={styles.text}>{address.freight}</Text>
        </View>
        <View style={{ marginLeft: "auto" }}>
          <TouchableOpacity onPress={() => setMoreInfo(!moreInfo)}>
            {
              moreInfo ? (
                <Entypo name="chevron-small-up" size={37} color="#4B6584" />
              ) : (
                <Entypo name="chevron-small-down" size={37} color="#4B6584" />
              )
            }
          </TouchableOpacity>
        </View>
      </View>
      {
        moreInfo && (
          <View style={styles.containerMoreInfo}>
            <View style={styles.containerInps}>
              <View style={styles.inputContainer}>
                <Feather name="map-pin" size={24} color="#6B6B6B" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Rua"
                  value={inpStreet}
                  onChangeText={setInpStreet}
                />
              </View>
              <View style={styles.inputContainer}>
                <MaterialIcons name="maps-home-work" size={19} color="#6B6B6B" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="CEP"
                  value={inpCep}
                  onChangeText={handleCepChange}
                />
              </View>
              <View style={styles.containerRow}>
                <View style={styles.inputContainer2}>
                  <SimpleLineIcons name="map" size={19} color="#6B6B6B" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Cidade"
                    value={inpCity}
                    onChangeText={setInpCity}
                  />
                </View>
                <View style={styles.inputContainer2}>
                  <Feather name="globe" size={19} color="#6B6B6B" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Estado"
                    value={inpState}
                    onChangeText={handleStateChange}
                  />
                </View>
              </View>
              <View style={styles.inputContainer}>
                <Feather name="grid" size={19} color="#6B6B6B" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Complemento"
                  value={inpComplement}
                  onChangeText={setInpComplement}
                />
              </View>
              <View style={styles.inputContainer}>
                <MaterialCommunityIcons name="keyboard" size={19} color="#6B6B6B" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Número"
                  value={String(inpNumber)}
                  onChangeText={setInpNumber}
                />
              </View>
              <View style={styles.containerSwitch}>
                <Switch
                  trackColor={{ false: "#767577", true: "#4B6584" }}
                  thumbColor="#F3F3F3"
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={setInpActive}
                  value={inpActive}
                />
                <Text style={styles.switchText}>Definir padrão</Text>
              </View>
            </View>
            <View style={styles.containerBtn}>
              <TouchableOpacity onPress={handleUpdate} style={styles.btn}>
                <Text style={styles.txtBtn}>Atualiar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnRmv} onPress={handleDelete}>
                <Text style={styles.txtBtn}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    </View>
  )
}

export default CardAddress