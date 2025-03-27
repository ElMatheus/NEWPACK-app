import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList, Dimensions, Animated } from 'react-native';
import { CartContext } from '../../../contexts/CartContext';
import { AuthContext } from '../../../contexts/AuthContext';
import { useState, useEffect, useRef, useContext, use } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import useAnimatedScale from '../../../hooks/useAnimatedScale';
import ContainerPurchase from '../../../components/ContainerPurchase';
import GlobalLoading from '../../../components/GlobalLoading';
import PopUp2 from '../../../components/PopUp2';
import * as Linking from 'expo-linking';
import * as Clipboard from 'expo-clipboard';

// esta pagina e a pagina de detalhes do produto, onde o usuario vai poder ver as imagens do produto, o nome, o preco, a quantidade, e adicionar ao carrinho, esta pagina so ira aparecer se o usuario clicar em um produto na tela Home

// pegar a largura da tela
const { width } = Dimensions.get('window');

export default function ProductDetails() {
  const { addToCart, cart } = useContext(CartContext);
  const { getProductById, getOrderDetailsById, globalLoading } = useContext(AuthContext);
  const route = useRoute();
  const [order, setOrder] = useState({});
  const [product, setProduct] = useState({});
  const flatListRef = useRef();
  const navigation = useNavigation();
  const { id, quantityParams } = route.params
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const scale = useAnimatedScale(cart.length);

  useEffect(() => {
    const fetchProduct = async () => {
      const orderData = await getOrderDetailsById(id);
      setOrder(orderData.orderDetail);
      if (quantityParams) {
        setQuantity(quantityParams);
      } else {
        setQuantity(orderData.orderDetail.quantity);
      }
      if (orderData) {
        const productData = await getProductById(orderData.orderDetail.product_id);
        setProduct(productData);
      }

    }
    fetchProduct();
  }, [id])

  useEffect(() => {
    const newTotalPrice = order.unitary_price * quantity;
    setTotalPrice(newTotalPrice);
  }, [quantity, order.unitary_price]);

  // funcao que vai ser chamada toda vez que o usuario clicar em um ponto para mudar a imagem: sao duas funcoes as duas se complementam
  const ImageSlider = ({ image }) => {
    return (
      <Image source={{ uri: image }} style={styles.image} />
    );
  }

  // funcao que vai ser chamada toda vez que o usuario clicar em um ponto para mudar a imagem: sao duas funcoes as duas se complementam
  const handlePress = (index) => {
    setImageIndex(index);
    flatListRef.current.scrollToIndex({ animated: true, index: index }); // Scroll to the selected index
  };

  const handleShare = async () => {
    const redirectUrl = Linking.createURL(`Products/${id}`)
    await Clipboard.setStringAsync(redirectUrl);
  }

  const handleAddToCart = async () => {
    try {
      const fullPrice = Number(quantity) * order.unitary_price;
      const productCart = {
        produto_id: product.id,
        pedido_id: order.id,
        produto_nome: product.name,
        total_value: (product.quantity_mts || 1) * fullPrice,
        produto_tipo: product.type,
        produto_categoria: product.category,
        produto_quantidade: Number(quantity),
        produto_imagens: product.images,
        produto_desc: product.description,
        produto_dimensao: product.dimension,
        produto_dureza: product.toughness,
        produto_preco: order.unitary_price,
        produto_quantidade_mts: product.quantity_mts,
        full_price: fullPrice.toFixed(2)
      };
      await addToCart(productCart);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      {
        error && <PopUp2 exitPopUp={setError} />
      }
      {globalLoading ? (
        <GlobalLoading />
      ) : (
        <>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.containerHeader}>
                {/* navegar para voltar para a tela Home */}
                <TouchableOpacity onPress={() => { navigation.goBack(); handlePress(0); }}>
                  <AntDesign style={styles.icon} name="left" size={24} color="#4B6584" />
                </TouchableOpacity>
                {/* navegar para a tela de carrinho */}
                <View style={styles.conatinerHeaderShare}>
                  <View>
                    {
                      cart.length > 0 && (
                        <Animated.View style={[styles.cartBtn, { transform: [{ scale: scale }] }]}>
                          <Text style={styles.cartText}>{cart.length}</Text>
                        </Animated.View>
                      )
                    }
                    <TouchableOpacity style={{ position: 'relative' }} onPress={() => { navigation.navigate('CartTab'); handlePress(0); }}>
                      <FontAwesome5 style={styles.icon} name="shopping-cart" size={24} color="#4B6584" />
                    </TouchableOpacity>
                  </View>
                  {/* Link */}
                  <TouchableOpacity onPress={handleShare}>
                    <FontAwesome style={styles.icon} name="share" size={24} color="#4B6584" />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                {/* aqui eu uso o flat list e meio que um map para pegar todas as imagens daquele determinado produto */}
                <FlatList
                  ref={flatListRef}
                  data={product.images}
                  style={{ maxHeight: 299, width: 358 }}
                  pagingEnabled
                  horizontal
                  onMomentumScrollEnd={(e) => {
                    const index = Math.round(e.nativeEvent.contentOffset.x / width);
                    setImageIndex(index);
                  }}
                  scrollEventThrottle={16}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => <ImageSlider image={item} />}
                />
                {product.images && product.images.length > 0 ? (
                  <View style={styles.containerPoints}>
                    {product.images.map((_, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => handlePress(index)}
                        style={{
                          height: 10,
                          width: 10,
                          borderRadius: 5,
                          backgroundColor: imageIndex === index ? '#4B6584' : '#A7A7A7',
                          margin: 5,
                        }}
                      />
                    ))}
                  </View>
                ) : null}
              </View>
              <View style={styles.containerDetails}>
                <View>
                  <Text style={styles.txtName}>{product.name}</Text>
                  <View style={styles.containerCod}>
                    <Feather name="tag" size={22} color="#000" />
                    <Text style={styles.txtCode}>Cod. {product.id}</Text>
                  </View>
                </View>
                <View style={styles.containerProduct}>
                  <View style={styles.containerQuantity}>
                    <Text style={styles.txtQuant}>Quantidade:</Text>
                    <TextInput keyboardType="numeric" value={quantity.toString()} onChangeText={(text) => setQuantity(Number(text))} style={styles.input} />
                  </View>
                  <View style={styles.containerSpecifications}>
                    {product.dimension && (
                      <View style={styles.card}>
                        <Feather name="maximize" size={18} color="#fff" />
                        <Text style={styles.txtSpecification}>{product.dimension}</Text>
                      </View>
                    )}
                    {product.toughness && (
                      <View style={styles.card}>
                        <Feather name="box" size={18} color="#fff" />
                        <Text style={styles.txtSpecification}>{product.toughness}</Text>
                      </View>
                    )}
                  </View>
                </View>

              </View>

            </View >
          </ScrollView>
          <ContainerPurchase type={product.type} desc={product.description} totalPrice={totalPrice} handleAddToCart={handleAddToCart} />
        </>
      )
      }
    </>

  )
}