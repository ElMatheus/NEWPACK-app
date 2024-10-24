import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList, Dimensions, Animated } from 'react-native';
import { CartContext } from '../../contexts/CartContext';
import { AuthContext } from '../../contexts/AuthContext';
import { useState, useEffect, useRef, useContext } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import useAnimatedScale from '../../hooks/useAnimatedScale';
import ContainerPurchase from '../../components/ContainerPurchase';
import GlobalLoading from '../../components/GlobalLoading';
import PopUp2 from '../../components/PopUp2';

// esta pagina e a pagina de detalhes do produto, onde o usuario vai poder ver as imagens do produto, o nome, o preco, a quantidade, e adicionar ao carrinho, esta pagina so ira aparecer se o usuario clicar em um produto na tela Home

// pegar a largura da tela
const { width } = Dimensions.get('window');

export default function ProductDetails({ route }) {
  const { addToCart, cart } = useContext(CartContext);
  const { getProductById, globalLoading } = useContext(AuthContext);
  const flatListRef = useRef();
  const navigation = useNavigation();
  const { product } = route.params;
  const [quantity, setQuantity] = useState(product.produto_quantidade);
  const [error, setError] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [totalPrice, setTotalPrice] = useState(product.produto_preco * product.produto_quantidade);
  const scale = useAnimatedScale(cart.length);

  // toda vez que o produto mudar, ele vai setar a quantidade do produto
  useEffect(() => {
    setQuantity(product.produto_quantidade);
  }, [product.produto_quantidade]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setQuantity(product.produto_quantidade);
    });

    return unsubscribe;
  }, [navigation, product.produto_quantidade]);

  useEffect(() => {
    const newTotalPrice = product.produto_preco * quantity;
    setTotalPrice(newTotalPrice);
  }, [quantity, product.produto_preco]);

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

  const handleAddToCart = async () => {
    try {
      const productData = await getProductById(product.produto_id);
      const fullPrice = Number(quantity) * productData.unitary_value;
      const productCart = {
        produto_id: productData.id,
        produto_nome: productData.name,
        total_value: (productData.quantity_mts || 1) * fullPrice,
        produto_tipo: productData.type,
        produto_categoria: productData.category,
        produto_quantidade: Number(quantity),
        produto_imagens: productData.images,
        produto_desc: productData.description,
        produto_dimensao: productData.dimension,
        produto_dureza: productData.toughness,
        produto_preco: productData.unitary_value,
        produto_quantidade_mts: productData.quantity_mts,
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
              </View>
              <View>
                {/* aqui eu uso o flat list e meio que um map para pegar todas as imagens daquele determinado produto */}
                <FlatList
                  ref={flatListRef}
                  data={product.produto_imagens}
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
                {/* bolinhas para alternancia de imagem */}
                {
                  product.produto_imagens.length > 1 && (
                    <View style={styles.containerPoints}>
                      {product.produto_imagens.map((_, index) => (
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
                  )
                }
              </View>
              <View style={styles.containerDetails}>
                <Text style={styles.txtName}>{product.produto_nome}</Text>
                <View style={styles.containerCod}>
                  <Feather name="tag" size={22} color="#000" />
                  <Text style={styles.txtCode}>Cod. {product.produto_id}</Text>
                </View>
              </View>
              <View style={styles.containerSpecifications}>
                {product.produto_dimensao && (
                  <View style={styles.card}>
                    <Feather name="maximize" size={18} color="#fff" />
                    <Text style={styles.txtSpecification}>{product.produto_dimensao}</Text>
                  </View>
                )}
                {product.produto_dureza && (
                  <View style={styles.card}>
                    <Feather name="box" size={18} color="#fff" />
                    <Text style={styles.txtSpecification}>{product.produto_dureza}</Text>
                  </View>
                )}
              </View>
              <View style={styles.containerQuantity}>
                <Text style={styles.txtQuant}>Quantidade:</Text>
                <TextInput keyboardType="numeric" value={quantity.toString()} onChangeText={(text) => setQuantity(Number(text))} style={styles.input} />
              </View>
            </View >
          </ScrollView>
          <ContainerPurchase type={product.produto_tipo} desc={product.produto_desc} totalPrice={totalPrice} handleAddToCart={handleAddToCart} />
        </>
      )

      }

    </>

  )
}