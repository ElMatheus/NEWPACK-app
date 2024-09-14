import { View, Text, TouchableOpacity } from 'react-native';
import { useContext, useState, useEffect, useCallback } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import { useFocusEffect } from '@react-navigation/native';
import CardAddress from '../../components/CardAddress';

export default function Address() {
  const { getAddressesUser } = useContext(AuthContext);
  const [addresses, setAddresses] = useState(null);

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
    <View>
      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.containerIcon} onPress={() => handleTeste()}>
          <AntDesign style={styles.icon} name="left" size={26} color="#000" />
        </TouchableOpacity>
        <View style={styles.containerTxt}>
          <Text style={styles.txt}>Meus Endereços</Text>
        </View>
      </View>
      <View>
        {addresses && addresses.map((address) => (
          <CardAddress key={addresses.id} address={address} />
        ))}
      </View>
    </View>
  )
}