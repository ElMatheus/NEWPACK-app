import { View, TouchableOpacity, Text, ActivityIndicator, ScrollView } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/AuthContext';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import CardProduct from '../../components/CardProduct';
import styles from './styles';
import { CartContext } from '../../contexts/CartContext';
import GlobalLoading from '../../components/GlobalLoading';

export default function Home() {
  const navigation = useNavigation();
  const { cart } = useContext(CartContext);
  const { user, signOut, globalLoading, getProductsForUser } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [popUp, setPopUp] = useState(null);
  const [popUp2, setPopUp2] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Tudo');

  // toda vez que eu entrar na tela de home, ele vai chamar a funcao getProductsForUser do meu AuthContext
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await getProductsForUser();
        // aqui ele vai setar os produtos que ele pegou na requisicao no caso do meu back, ele vai pegar os produtos que o usuario comprou
        setProducts(response);
      } catch (error) {
        // se der erro na requisicao, seta um popUp de erro
        if (error.response) {
          // se a requisicao tiver uma mensagem programada do meu back como: "Usuario nao encontrado" seta um popUp2 com a mensagem que nela esta
          setPopUp2(error.response.data.message);
        } else {
          // ai se nao tiver uma mensagem programada, seta um popUp de erro interno do servidor
          setPopUp('Erro interno do servidor');
          setTimeout(() => {
            setPopUp(null);
          }, 3000);
        }
      }
    }
    getAllProducts();
  }, []);

  return (
    <>
      {/* loading */}
      {globalLoading ? (
        <GlobalLoading />
      ) : (
        <View style={styles.container}>
          <View style={styles.headerApp}>
            <View>
              <Text style={styles.txtStyle}>
                Bem Vindo,
              </Text>
              <Text style={styles.txtStyle}>
                {user.name}
              </Text>
            </View>
            <View>
              {
                cart.length > 0 && (
                  <View style={styles.cartBtn}>
                    <Text style={styles.cartText}>{cart.length}</Text>
                  </View>
                )
              }
              <FontAwesome5
                name="shopping-cart"
                size={24}
                color="#4B6584"
                onPress={() => navigation.navigate('Cart')}
                style={styles.cart} />
            </View>

          </View>
          <View style={styles.containerProducts}>
            <View style={styles.categories}>
              <ScrollView style={{ marginBottom: 20 }} horizontal={true} showsHorizontalScrollIndicator={false} >
                <View style={styles.categories}>

                  {['Tudo', 'Clichês', 'Facas Rotativas', 'Facas Planas', 'Facas Gráficas'].map((category) => (
                    <TouchableOpacity key={category} onPress={() => setSelectedCategory(category)} style={selectedCategory == category ? { borderBottomWidth: 2.3, borderBottomColor: '#4B6584' } : {}}>
                      <Text style={styles.txtCategories}>{category}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

              </ScrollView>
            </View>
            <Text style={styles.title}>Pedidos recentes</Text>
            <ScrollView>
              <View style={styles.containerCards}>
                {/* isso sao todos os meus produtos eu faco um map pegando cada um e componentizo ele */}
                {products.length > 0 && products.map((product, index) => (
                  <TouchableOpacity key={index} onPress={() => navigation.navigate('ProductDetails', { product })}>
                    <CardProduct name={product.produto_nome} image={product.produto_imagens[0]} unitary_price={product.produto_preco} toughness={product.produto_dureza} dimension={product.produto_dimensao} cod={product.produto_id} />
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      )}
    </>
  )
}