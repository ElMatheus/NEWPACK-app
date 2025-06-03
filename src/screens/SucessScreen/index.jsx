import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Sharing from 'expo-sharing';
import styles from './styles';
import { useRef, useContext, useState, useEffect } from 'react';
import { captureRef } from 'react-native-view-shot';
import { AuthContext } from '../../contexts/AuthContext';
import GlobalLoading from '../../components/GlobalLoading';
import PopUp from '../../components/PopUp2';

export default function Sucess({ route }) {
  const { globalLoading, getOrderById, popUpMessage } = useContext(AuthContext);
  const { orderId } = route.params;
  const navigation = useNavigation();
  const imageRef = useRef(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [order, setOrder] = useState(null);
  const [total, setTotal] = useState(null);
  const [installment, setInstallment] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const orderData = await getOrderById(orderId);
      setOrder(orderData);
      const totalValue = orderData.Order_details.reduce((acc, item) => acc + Number(item.full_price), 0);
      const installmentValue = Number(totalValue) / Number(orderData.installment);
      setTotal(Number(totalValue).toFixed(2));
      setInstallment(installmentValue.toFixed(2));
    };
    fetchOrder();
  }, [orderId]);

  if (status === null) {
    requestPermission();
  }

  useEffect(() => {
    if (popUpMessage) {
      setError(popUpMessage);
    }
  }, [popUpMessage]);

  const handleSave = async () => {
    try {
      const uri = await captureRef(imageRef, {
        format: 'png',
        quality: 1,
        result: 'tmpfile', // arquivo real
      });

      await MediaLibrary.saveToLibraryAsync(uri);

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri, {
          mimeType: 'image/png',
          dialogTitle: 'Compartilhar comprovante',
        });
      } else {
        console.log('Sharing is not available on this platform');
      }

    } catch (error) {
      console.error("Erro ao compartilhar:", error);
    }
  };

  return (
    globalLoading || order == null ? (
      <GlobalLoading />
    ) : (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View ref={imageRef} collapsable={false} style={styles.card}>
            <View style={styles.receiptHeader}>
              <View style={styles.checkCircle}>
                <Ionicons name="checkmark" size={40} color="#fff" />
              </View>
              <Text style={styles.title}>Pedido Concluído!</Text>
              <Text style={styles.txt}>O seu pedido foi processado com sucesso.</Text>
            </View>
            <View style={styles.receiptInfo}>
              <Text style={styles.orderId}>Pedido #{orderId}</Text>
              <Text style={styles.dateText}>{new Date(order.order_date).toLocaleDateString('pt-BR')}</Text>
              <View style={styles.statusContainer}>
                <Text style={styles.statusLabel}>Status:</Text>
                {
                  order.status === 'Concluído' ? (
                    <View style={styles.statusBadge}>
                      <Text style={styles.statusText}>{order.status}</Text>
                    </View>
                  ) : (
                    <View style={styles.statusBadge2}>
                      <Text style={styles.statusText}>{order.status}</Text>
                    </View>
                  )
                }
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.itemsContainer}>
              <Text style={styles.sectionTitle}>Itens do pedido</Text>

              {order.Order_details.map((item) => (
                <View key={item.id} style={styles.itemRow}>
                  <Text style={styles.itemName}>{item.product_id}</Text>
                  <Text style={styles.itemQuantity}>Qtd: {item.quantity}</Text>
                  <Text style={styles.itemPrice}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.full_price)}</Text>
                </View>
              ))}
            </View>
            <View style={styles.summaryContainer}>
              <View style={styles.valueContainer}>
                <View style={[styles.summaryRow, styles.totalRow]}>
                  <Text style={styles.totalLabel}>Total</Text>
                  <Text style={styles.totalValue}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</Text>
                </View>
                <Text style={styles.installmentTitle}>{order.installment}x de {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(installment)}</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleSave} style={[styles.btn, styles.shareBtn]}>
                <Ionicons name="share-outline" size={24} color="#fff" style={styles.btnIcon} />
                <Text style={styles.btnTxt}>Compartilhar</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('ProductsTab')} style={styles.btn}>
                <Text style={styles.btnTxt}>Voltar aos Produtos</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        {error && (
          <PopUp
            exitPopUp={setError}
          />
        )}
      </View >
    )
  );
}