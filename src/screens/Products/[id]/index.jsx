import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList, Dimensions, Animated } from 'react-native';
import { CartContext } from '../../../contexts/CartContext';
import { AuthContext } from '../../../contexts/AuthContext';
import { useState, useEffect, useRef, useContext } from 'react';
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
import { Share } from 'react-native';

const { width } = Dimensions.get('window');

export default function ProductDetails() {
  const { addToCart, cart } = useContext(CartContext);
  const { getOrderDetailsById, globalLoading, popUpMessage } = useContext(AuthContext);
  const route = useRoute();
  const [order, setOrder] = useState(null);
  const flatListRef = useRef();
  const navigation = useNavigation();
  const { id, quantityParams } = route.params;
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const scale = useAnimatedScale(cart.length);

  useEffect(() => {
    const fetchProduct = async () => {
      const orderData = await getOrderDetailsById(id);
      if (orderData) {
        setOrder(orderData);
        if (quantityParams) {
          setQuantity(quantityParams);
        } else {
          setQuantity(orderData.quantity);
        }
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (order?.product) {
      const newTotalPrice = order.product.unit_value * quantity;
      setTotalPrice(newTotalPrice);
    }
  }, [quantity, order]);

  useEffect(() => {
    if (popUpMessage) {
      setError(popUpMessage);
    }
  }, [popUpMessage]);

  const ImageSlider = ({ image }) => {
    return <Image source={{ uri: image.image_url }} style={styles.image} />;
  };

  const handlePress = (index) => {
    setImageIndex(index);
    flatListRef.current.scrollToIndex({ animated: true, index: index });
  };

  const handleShare = async () => {
    try {
      const redirectUrl = Linking.createURL(`Products/${id}`);
      await Clipboard.setStringAsync(redirectUrl);

      await Share.share({
        message: `Confira o produto que encontrei no app: ${redirectUrl}`,
      });
    } catch (error) {
      console.error('Error sharing product:', error);
    }
  };

  const handleAddToCart = async () => {
    try {
      const fullPrice = Number(quantity) * order.product.unit_value;
      const productCart = {
        produto_id: order.product.id,
        pedido_id: order.id,
        produto_nome: order.product.name,
        total_value: (order.product.unit_quantity || 1) * fullPrice,
        produto_tipo: order.product.type,
        produto_categoria: order.product.category,
        produto_quantidade: Number(quantity),
        produto_imagem: order.product.Product_image[0].image_url,
        produto_desc: order.product.description,
        produto_dimensao: order.product.dimension,
        produto_dureza: order.product.toughness,
        produto_preco: order.product.unit_value,
        produto_quantidade_mts: order.product.unit_quantity,
        full_price: fullPrice.toFixed(2),
      };
      await addToCart(productCart);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      {error && <PopUp2 exitPopUp={setError} />}
      {globalLoading ? (
        <GlobalLoading />
      ) : order ? (
        <>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.containerHeader}>
                <TouchableOpacity onPress={() => { navigation.goBack(); handlePress(0); }}>
                  <AntDesign style={styles.icon} name="left" size={24} color="#4B6584" />
                </TouchableOpacity>
                <View style={styles.conatinerHeaderShare}>
                  <View>
                    {cart.length > 0 && (
                      <Animated.View style={[styles.cartBtn, { transform: [{ scale: scale }] }]}>
                        <Text style={styles.cartText}>{cart.length}</Text>
                      </Animated.View>
                    )}
                    <TouchableOpacity style={{ position: 'relative' }} onPress={() => { navigation.navigate('CartTab'); handlePress(0); }}>
                      <FontAwesome5 style={styles.icon} name="shopping-cart" size={24} color="#4B6584" />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={handleShare}>
                    <FontAwesome style={styles.icon} name="share" size={24} color="#4B6584" />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <FlatList
                  ref={flatListRef}
                  data={order.product.Product_image}
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
                {order.product.Product_image && order.product.Product_image.length > 0 ? (
                  <View style={styles.containerPoints}>
                    {order.product.Product_image.map((_, index) => (
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
                  <Text style={styles.txtName}>{order.product.name}</Text>
                  <View style={styles.containerCod}>
                    <Feather name="tag" size={22} color="#000" />
                    <Text style={styles.txtCode}>Cod. {order.product.id}</Text>
                  </View>
                </View>
                <View style={styles.containerProduct}>
                  <View style={styles.containerQuantity}>
                    <Text style={styles.txtQuant}>Quantidade:</Text>
                    <TextInput keyboardType="numeric" value={quantity.toString()} onChangeText={(text) => setQuantity(Number(text))} style={styles.input} />
                  </View>
                  <View style={styles.containerSpecifications}>
                    {order.product.dimension && (
                      <View style={styles.card}>
                        <Feather name="maximize" size={18} color="#fff" />
                        <Text style={styles.txtSpecification}>{order.product.dimension}</Text>
                      </View>
                    )}
                    {order.product.toughness && (
                      <View style={styles.card}>
                        <Feather name="box" size={18} color="#fff" />
                        <Text style={styles.txtSpecification}>{order.product.toughness}</Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <ContainerPurchase
            type={order.product.type}
            desc={order.product.description}
            totalPrice={totalPrice}
            handleAddToCart={handleAddToCart}
          />
        </>
      ) : null}
    </>
  );
}