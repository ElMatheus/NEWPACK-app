import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useContext, useState, useEffect, useCallback } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import CardAddress from '../../components/CardAddress';
import CreateAddress from '../../components/CreateAddress';
import PopUp from '../../components/PopUp';
import GlobalLoading from '../../components/GlobalLoading';
import PopUp2 from '../../components/PopUp2';
import NoProductsMessage from '../../components/NoProductsMessage';

export default function Address() {
  const [modalVisible, setModalVisible] = useState(false);
  const { getAddressesUser, globalLoading, popUpMessage, setPopUpMessage } = useContext(AuthContext);
  const [addresses, setAddresses] = useState(null);
  const navigation = useNavigation();
  const [popUp, setPopUp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const statusBarHeight = Constants.statusBarHeight;

  const fetchAddresses = async () => {
    const addresses = await getAddressesUser();
    setAddresses(addresses);
  };

  useFocusEffect(
    useCallback(() => {
      fetchAddresses();
    }, [])
  );

  useEffect(() => {
    if (popUpMessage) {
      setError(true)
    } else {
      setError(false)
    }
  }, [popUpMessage]);

  useEffect(() => {
    if (globalLoading) {
      setLoading(true);
      fetchAddresses();
    } else {
      setLoading(false);
    }
  }, [globalLoading]);

  return (
    <>
      {
        loading ? (
          <GlobalLoading />
        ) : (
          <View style={{ marginTop: statusBarHeight }}>
            {popUp && <PopUp message={popUp} />}
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
                {addresses && addresses.length > 0 ? (
                  addresses.map((address, index) => (
                    <CardAddress key={index} address={address} setPopUp={setPopUp} />
                  ))
                ) : (
                  <NoProductsMessage msg="Você não possui endereços cadastrados" />
                )}
              </View>
              <CreateAddress modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </ScrollView>
          </View>
        )
      }
      {error && <PopUp2 exitPopUp={setPopUpMessage} />}
    </>
  )
}