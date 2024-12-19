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

export default function Home() {
  const navigation = useNavigation();
  const { cart, clearCart } = useContext(CartContext);
  const { user, signOut, globalLoading, getProductsForUser } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [popUp, setPopUp] = useState(null);
  const [popUp2, setPopUp2] = useState(null);
  const [moreInfo, setMoreInfo] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('tudo');
  const [refreshing, setRefreshing] = useState(false);

  const handleExit = () => {
    signOut();
    clearCart();
  }

  const fetchProducts = async () => {
    try {
      const response = await getProductsForUser(selectedCategory);
      setProducts(response);
    } catch (error) {
      if (error.response) {
        setPopUp2(error.response.data.message);
      } else {
        setPopUp('Erro interno do servidor');
        setTimeout(() => {
          setPopUp(null);
        }, 3000);
      }
    }
  }

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProducts();
    setRefreshing(false);
  }

  // toda vez que eu entrar na tela de home, ele vai chamar a funcao getProductsForUser do meu AuthContext
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
                  onPress={() => setMoreInfo(!moreInfo)}
                />
                {
                  moreInfo && (
                    <View style={styles.containerButton}>
                      <TouchableOpacity onPress={handleExit} style={styles.exitButton}>
                        <Text style={styles.exitButtonText}>Sair</Text>
                      </TouchableOpacity>
                    </View>
                  )
                }
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
                {/* isso sao todos os meus produtos eu faco um map pegando cada um e componentizo ele */}
                {products.length > 0 ? (
                  products.map((product, index) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate('ProductDetails', { product })}>
                      <CardProduct name={product.produto_nome} image={product.produto_imagens[0]} unitary_price={product.produto_preco} toughness={product.produto_dureza} dimension={product.produto_dimensao} cod={product.produto_id} />
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