/**
 * Desenvolvido por Matheus Gomes - [https://github.com/ElMatheus | matheusgomesgoncalves.564@gmail.com]
 * Projeto: NEWPACK-APP
 * Data de criação: 2024-2025
 */

import { View, Text, TouchableOpacity, TextInput, ScrollView, BackHandler } from 'react-native';
import Constants from 'expo-constants';
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
import Guarantee from '../../components/GuaranteePopUp';

export default function Checkout() {
  const { getProfileFromAsyncStorage, getAddressActiveUser, user, globalLoading, createOrder, createOrderItem, popUpMessage, setPopUpMessage, sendEmail, updateOrderStatusInvalid, notifyOrder, sendEmailConfirmation } = useContext(AuthContext);
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
  const [guarante, setGuarante] = useState(false);
  const [error, setError] = useState(null);
  const statusBarHeight = Constants.statusBarHeight;

  useFocusEffect(
    useCallback(() => {
      const fetchProfile = async () => {
        setLoading(true);
        const address = await getAddressActiveUser();

        if (address.length > 0) {
          setSelectedAddress(address[0]);
        } else {
          setSelectedAddress(null);
        }
        const profileData = await getProfileFromAsyncStorage();
        if (profileData) {
          setProfile(JSON.parse(profileData));
        } else {
          navigation.navigate('UserForm', { element: null });
        }
        if (!user || !user.email || user.email.trim() === '') {
          navigation.navigate('EmailForm');
        }
        setLoading(false);
      };

      fetchProfile();

      const onBackPress = () => {
        setGuarante(true);
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [user])
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
  }, [totalValue, selectedValue]);

  const items = [
    { label: '1x', value: 1 },
    { label: '2x', value: 2 },
    totalValue > 3000 && { label: '3x', value: 3 },
  ].filter(Boolean);

  const handleChange = (element) => {
    navigation.navigate('UserForm', { element });
  };

  const handleCompletion = async () => {
    try {
      if (selectedAddress == null) {
        setMsgError('Selecione um endereço para entrega');
        setTimeout(() => setMsgError(null), 3000);
        return;
      }

      if (cart.length === 0) {
        setMsgError('Seu carrinho está vazio');
        setTimeout(() => setMsgError(null), 3000);
        return;
      }

      setLoading(true);

      const order = await createOrder(description, selectedValue);
      if (!order) {
        throw new Error('Falha ao criar pedido');
      }

      let hasError = false;
      const orderItemsPromises = cart.map(async (item) => {
        const orderItem = {
          "order_id": order.id,
          "product_id": item.produto_id,
          "quantity": item.produto_quantidade
        };

        const roundToTwo = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

        const order_detail = await createOrderItem(orderItem);

        const valorPedido = roundToTwo(Number(order_detail.full_price));
        const valorCarrinho = roundToTwo(Number(item.total_value));

        if (!order_detail || valorPedido !== valorCarrinho) {
          await updateOrderStatusInvalid(order.id);
          hasError = true;
          throw new Error('Valor do pedido não confere com o valor total do produto');
        }
      });

      await Promise.all(orderItemsPromises);
      if (hasError) return;

      let hasNotification = false;
      try {
        const whatsapp = await notifyOrder(order.id);
        if (whatsapp && whatsapp.status == "success") {
          hasNotification = true;
        }
      } catch (error) {
        await updateOrderStatusInvalid(order.id);
        throw new Error('Falha ao enviar notificação. Tente novamente mais tarde.');
      }
      const email = await sendEmail(order.id, hasNotification);
      if (!email || email.message !== "Email sent successfully") {
        await updateOrderStatusInvalid(order.id);
        throw new Error('Falha ao enviar email');
      }

      const email_confirmation = await sendEmailConfirmation(order.id);
      if (!email_confirmation || email_confirmation.status !== 201) {
        await updateOrderStatusInvalid(order.id);
        throw new Error('Falha ao enviar email de confirmação');
      }

      // Success case
      clearCart();
      setDescription(null);
      setSelectedValue(1);
      navigation.navigate('Sucess', { orderId: order.id });

    } catch (error) {
      setMsgError(error.message || 'Erro ao processar pedido');
      setTimeout(() => setMsgError(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  const verificationExit = () => {
    setGuarante(true);
  }

  const handleExit = () => {
    navigation.goBack();
    setDescription(null);
    setSelectedValue(1);
    setGuarante(false);
  }

  return (
    <>
      {
        msgError && <PopUp message={msgError} />
      }
      {
        error && <PopUp2 exitPopUp={setPopUpMessage} />
      }
      {
        guarante && <Guarantee onConfirm={handleExit} onCancel={() => setGuarante(false)} />
      }
      {
        loading || profile == null || user == null ? (
          <GlobalLoading />
        ) : (
          <ScrollView style={{ marginTop: statusBarHeight }}>
            <View style={styles.containerHeader}>
              <TouchableOpacity style={styles.containerIcon} onPress={verificationExit}>
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
                    <Text style={styles.txtCard}>{user.full_name}</Text>
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
                      <View style={styles.containerDesc}>
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
                    <CardItem key={index} cod={item.produto_id} desc={item.produto_desc} image={item.produto_imagem} name={item.produto_nome} price={parseInt(item.total_value)} quantity={item.produto_quantidade} />
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
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    style={styles.picker}
                  >
                    {items.map((item, index) => (
                      item && <Picker.Item key={index} label={item.label} value={item.value} />
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
