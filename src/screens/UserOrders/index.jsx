import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import { useContext, useEffect, useCallback, useState } from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import { AuthContext } from '../../contexts/AuthContext';
import GlobalLoading from '../../components/GlobalLoading';
import PopUp2 from '../../components/PopUp2';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import NoProductsMessage from '../../components/NoProductsMessage';
import OrderCard from '../../components/OrderCard';
import Constants from 'expo-constants';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function UserOrders() {
  const navigation = useNavigation();
  const { getOrdersForUser, globalLoading, popUpMessage } = useContext(AuthContext);
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const statusBarHeight = Constants.statusBarHeight;

  const fetchOrders = async () => {
    const orders = await getOrdersForUser();
    setOrders(orders);
  };

  useFocusEffect(
    useCallback(() => {
      fetchOrders();
    }, [])
  );

  useEffect(() => {
    if (globalLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [globalLoading]);

  useEffect(() => {
    if (popUpMessage) {
      setError(true);
    }
  }, [popUpMessage]);

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: statusBarHeight }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={29} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Meus Pedidos</Text>
      </View>

      {loading && <GlobalLoading />}
      {error && <PopUp2 message={popUpMessage} exitPopUp={setError} />}
      {!loading && !error && orders && orders.length === 0 && (
        <NoProductsMessage msg={"Nenhum pedido encontrado."} />
      )}
      {!loading && !error && orders && orders.length > 0 && (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <OrderCard order={item} />}
          contentContainerStyle={styles.ordersList}
        />
      )}
    </View>
  );
}