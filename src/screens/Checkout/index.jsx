import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useState, useEffect, useContext, useCallback } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import GlobalLoading from '../../components/GlobalLoading';
import styles from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import CardItem from '../../components/CardItem';
import { Picker } from '@react-native-picker/picker';
import InfoUser from '../../components/InfoUser';
import PopUp from '../../components/PopUp';
import PopUp2 from '../../components/PopUp2';

export default function Checkout() {
  const { getProfileFromAsyncStorage, getAddressActiveUser, user, globalLoading, createOrder, createOrderItem, popUpMessage, setPopUpMessage, sendEmail } = useContext(AuthContext);
  const { cart, totalValue, clearCart } = useContext(CartContext);
  const [profile, setProfile] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState(1);
  const [valueInstallment, setValueInstallment] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [description, setDescription] = useState(null);
  const [msgError, setMsgError] = useState(null);
  const [error, setError] = useState(null);

  useFocusEffect(
    useCallback(() => {
      const fetchProfile = async () => {
        setLoading(true);
        setSelectedValue(1);
        const address = await getAddressActiveUser();
        setSelectedAddress(address);
        const profileData = await getProfileFromAsyncStorage();
        if (profileData) {
          setProfile(JSON.parse(profileData));
        } else {
          navigation.navigate('UserForm', { element: null });
        }
        setLoading(false);
      };

      fetchProfile();
    }, [])
  );

  // globalLoading
  useEffect(() => {
    if (globalLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [globalLoading]);

  useEffect(() => {
    if (popUpMessage) {
      console.log(popUpMessage);
      setError(true)
    } else {
      setError(false)
    }
  }, [popUpMessage]);

  useEffect(() => {
    const installment = totalValue / Number(selectedValue);
    setValueInstallment(installment);
  }, [selectedValue]);

  const items = [
    { label: '1x', value: 1 },
    { label: '2x', value: 2 },
    totalValue > 3000 && { label: '3x', value: 3 },
  ].filter(Boolean);

  const handleChange = (element) => {
    navigation.navigate('UserForm', { element });
  };

  const handleCompletion = async () => {
    if (selectedAddress == null) {
      setMsgError('Selecione um endereço para entrega');
      setTimeout(() => {
        setMsgError(null);
      }, 3000);
      return;
    }
    const order = await createOrder(description, selectedValue);
    cart.map(async (item) => {
      const orderItem = {
        "order_id": order.order.id,
        "product_id": item.produto_id,
        "quantity": item.produto_quantidade
      };
      await createOrderItem(orderItem);
    });
    await sendEmail(order.order.id);
    navigation.popToTop();
    navigation.navigate('Sucess');
    clearCart();
  };
  return (
    <>
      {
        msgError && <PopUp message={msgError} />
      }
      {
        error && <PopUp2 exitPopUp={setPopUpMessage} />
      }
      {
        loading || profile == null || user == null ? (
          <GlobalLoading />
        ) : (
          <ScrollView>
            <View style={styles.containerHeader}>
              <TouchableOpacity style={styles.containerIcon} onPress={() => navigation.goBack()}>
                <AntDesign style={styles.icon} name="left" size={26} color="#000" />
              </TouchableOpacity>
              <Text style={styles.titleHeader}>Finalização de Compra</Text>
            </View>
            <View style={styles.container}>
              <View style={styles.cardInfo}>
                <View style={styles.containerCard}>
                  <Feather name="truck" size={27} color="#000" />
                  <View style={styles.containerDesc}>
                    <Text style={styles.titleCard}>{user.name}</Text>
                    <Text style={styles.txtCard}>{user.cnpj}</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Text style={styles.txtButton}>Mudar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cardInfo}>
                <View style={styles.containerCard}>
                  <Feather name="user" size={27} color="#000" />
                  <View style={styles.containerDesc}>
                    <Text style={styles.titleCard}>{profile.name}</Text>
                    <Text style={styles.txtCard}>{profile.country.callingCode} {profile.telephone}</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => handleChange(profile)}>
                  <Text style={styles.txtButton}>Mudar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cardInfo}>
                <View style={styles.containerCard}>
                  <Feather name="map-pin" size={27} color="#000" />
                  {
                    selectedAddress == null ? (
                      <View>
                        <Text style={styles.titleCard}>Endereço não selecionado</Text>
                        <Text style={styles.txtCard}>Selecione um endereço para entrega</Text>
                      </View>

                    ) : (
                      <View style={styles.containerDesc}>
                        <Text style={styles.titleCard}>{selectedAddress.street}, {selectedAddress.number}</Text>
                        <Text style={styles.txtCard}>{selectedAddress.city}</Text>
                      </View>
                    )
                  }

                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Address")}>
                  <Text style={styles.txtButton}>Mudar</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.containerItems}>
              <View style={styles.containerTxts}>
                <Text style={styles.txt}>Itens selecionados</Text>
                <Text style={styles.txt}>{cart.length}</Text>
              </View>
              <View>
                {
                  cart.map((item, index) => (
                    <CardItem key={index} cod={item.produto_id} desc={item.produto_desc} image={item.produto_imagens[0]} name={item.produto_nome} price={parseInt(item.total_value)} quantity={item.produto_quantidade} />
                  ))
                }
              </View>
            </View>
            <View style={styles.containerObs}>
              <View style={styles.containerTxts}>
                <Text style={styles.txt}>Observações</Text>
              </View>
              <TextInput onChangeText={setDescription} value={description} multiline={true} style={styles.input} placeholder="Adicione uma observação em seu pedido (adicionar apenas as borrachas mais macias)" />
            </View>

            <View style={styles.containerInfo}>
              <View style={styles.containerTxtsInfo}>
                <Text style={styles.txtTitle}>Subtotal</Text>
                <Text style={styles.txt}>  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValue)}</Text>
              </View>
              <View style={styles.containerTxtsInfo2}>
                <Text style={styles.txtTitle}>Parcelamento</Text>
                <View style={styles.containerSelectValue}>
                  <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    style={styles.picker}
                  >
                    {items.map((item, index) => (
                      <Picker.Item key={index} label={item.label} value={item.value} />
                    ))}
                  </Picker>
                </View>
              </View>
              <View style={styles.containerTxtsInfo}>
                <Text style={styles.txtTitle}>Prestação</Text>
                <Text style={styles.txt}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valueInstallment)}</Text>
              </View>
              <View style={styles.containerTxtsInfo}>
                <Text style={styles.txtTitle}>Tipo de frete</Text>
                {
                  selectedAddress == null ? (
                    <Text style={styles.txt}></Text>
                  ) : (
                    <Text style={styles.txt}>{selectedAddress.freight}</Text>
                  )

                }
              </View>
            </View>
            <View style={styles.containerFinish}>
              <Text style={styles.txtWarning}>Antes de confirmar, confira seus produtos e métodos de identificação.</Text>
              <TouchableOpacity style={styles.btn} onPress={handleCompletion}>
                <Text style={styles.txtBtn}>Finalizar Compra</Text>
              </TouchableOpacity>
            </View>
            <InfoUser modalVisible={modalVisible} setModalVisible={setModalVisible} />
          </ScrollView>
        )

      }
    </>
  )

};
