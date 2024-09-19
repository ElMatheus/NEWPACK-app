import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useContext, useState, useEffect, useCallback } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import CardAddress from '../../components/CardAddress';
import CreateAddress from '../../components/CreateAddress';

export default function Address() {
  const [modalVisible, setModalVisible] = useState(false);
  const { getAddressesUser } = useContext(AuthContext);
  const [addresses, setAddresses] = useState(null);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const fetchAddresses = async () => {
        const addresses = await getAddressesUser();
        setAddresses(addresses);
      };
      fetchAddresses();
    }, [])
  );

  const handleTeste = async () => {
    const addresses = await getAddressesUser();
    console.log(addresses);
  };



  return (
    <ScrollView>
      <View style={styles.containerHeader}>
        <View style={styles.containerIcon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign style={styles.icon} name="left" size={29} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Feather style={styles.icon} name="plus-square" size={29} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.containerTxt}>
          <Text style={styles.txt}>Meus Endereços</Text>
        </View>
      </View>
      <View>
        {addresses && addresses.map((address, index) => (
          <CardAddress key={index} address={address} />
        ))}
      </View>
      <CreateAddress modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </ScrollView>
  )
}