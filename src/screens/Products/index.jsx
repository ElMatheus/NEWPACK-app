import { View, TouchableOpacity, Text, ScrollView, RefreshControl } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/AuthContext';
import CardProduct from '../../components/CardProduct';
import styles from './styles';
import { CartContext } from '../../contexts/CartContext';
import GlobalLoading from '../../components/GlobalLoading';
import NoProductsMessage from '../../components/NoProductsMessage';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import PopUp2 from '../../components/PopUp2';

export default function Products() {
  const navigation = useNavigation();
  const { cart } = useContext(CartContext);
  const { user, globalLoading, getProductsForUser, popUpMessage } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [popUp2, setPopUp2] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('tudo');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setPopUp2(popUpMessage);
  }, [popUpMessage]);

  const fetchProducts = async () => {
    const response = await getProductsForUser(selectedCategory);
    setProducts(response);
  }

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProducts();
    setRefreshing(false);
  }

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const categoryMapping = {
    'Tudo': 'tudo',
    'Clichês': 'cliches',
    'Facas Rotativas': 'facas_rotativas',
    'Facas Planas': 'facas_planas',
    'Facas Gráficas': 'facas_graficas',
    'Outros': 'outros'
  };

  return (
    <>
      {popUp2 && <PopUp2 message={popUp2} exitPopUp={setPopUp2} />}
      {globalLoading ? (
        <GlobalLoading />
      ) : (
        <View style={styles.container}>
          <View style={styles.headerApp}>
            <View style={styles.containerHeader}>
              <Text style={styles.txtStyle}>
                Bem Vindo,
              </Text>
              <Text style={styles.txtStyle}>
                {user.name}
              </Text>
            </View>
            <View style={styles.containerInfo}>
              <View style={{ position: "relative" }}>
                <FontAwesome
                  name="user-o"
                  size={24}
                  color="#4B6584"
                  onPress={() => navigation.navigate('UserInfos')}
                />

              </View>
              {
                cart.length > 0 && (
                  <View style={styles.cartBtn}>
                    <Text style={styles.cartText}>{cart.length}</Text>
                  </View>
                )
              }
              <Feather
                name="shopping-cart"
                size={24}
                color="#4B6584"
                onPress={() => navigation.navigate('CartTab')}
                style={styles.cart} />

            </View>

          </View>
          <View style={styles.containerProducts}>
            <View style={styles.categories}>
              <ScrollView style={{ marginBottom: 20 }} horizontal={true} showsHorizontalScrollIndicator={false} >
                <View style={styles.categories}>
                  {Object.keys(categoryMapping).map((displayCategory) => (
                    <TouchableOpacity
                      key={displayCategory}
                      onPress={() => setSelectedCategory(categoryMapping[displayCategory])}
                      style={selectedCategory === categoryMapping[displayCategory] ? { borderBottomWidth: 2.3, borderBottomColor: '#4B6584' } : {}}
                    >
                      <Text style={styles.txtCategories}>{displayCategory}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
            <Text style={styles.title}>Pedidos recentes</Text>
            <ScrollView
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            >
              <View style={styles.containerCards}>
                {products ? (
                  products.map((product) => (
                    <TouchableOpacity key={product.id} onPress={() => navigation.navigate('ProductDetails', { id: product.order_details_id })}>
                      <CardProduct name={product.name} image={product.image} unitary_price={product.unit_value} toughness={product.toughness} dimension={product.dimension} cod={product.id} status={product.order_status} />
                    </TouchableOpacity>
                  ))
                ) : (
                  <NoProductsMessage msg="Não foram encontrados produtos nessa categoria." />
                )}
              </View>
            </ScrollView>
          </View>
        </View>
      )}
    </>
  )
}