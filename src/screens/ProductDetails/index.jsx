import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList, Dimensions } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';

// esta pagina e a pagina de detalhes do produto, onde o usuario vai poder ver as imagens do produto, o nome, o preco, a quantidade, e adicionar ao carrinho, esta pagina so ira aparecer se o usuario clicar em um produto na tela Home

// pegar a largura da tela
const { width } = Dimensions.get('window');

export default function ProductDetails({ route }) {
  const flatListRef = useRef();
  const navigation = useNavigation();
  const { product } = route.params;
  const [quantity, setQuantity] = useState(product.produto_quantidade);
  const [imageIndex, setImageIndex] = useState(0);
  const [totalPrice, setTotalPrice] = useState(product.produto_preco * product.produto_preco);

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

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            {/* navegar para voltar para a tela Home */}
            <TouchableOpacity onPress={() => { navigation.navigate('Home'); handlePress(0); }}>
              <AntDesign style={styles.icon} name="left" size={24} color="#4B6584" />
            </TouchableOpacity>
            {/* navegar para a tela de carrinho */}
            <TouchableOpacity onPress={() => { navigation.navigate('Cart'); handlePress(0); }}>
              <FontAwesome5 style={styles.icon} name="shopping-cart" size={24} color="#4B6584" />
            </TouchableOpacity>
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
            <View style={styles.card}>
              <Feather name="maximize" size={18} color="#fff" />
              <Text style={styles.txtSpecification}>{product.produto_dimensao}</Text>
            </View>
            <View style={styles.card}>
              <Feather name="box" size={18} color="#fff" />
              <Text style={styles.txtSpecification}>{product.produto_dureza}</Text>
            </View>
          </View>
          <View style={styles.containerQuantity}>
            <Text style={styles.txtQuant}>Quantidade:</Text>
            <TextInput keyboardType="numeric" value={quantity.toString()} onChangeText={(text) => setQuantity(text)} style={styles.input} />
          </View>
        </View >
      </ScrollView>
      {
        product.produto_tipo == 'caixa' ? (
          <View style={styles.containerPurchase}>
            <View style={styles.containerPrice}>
              <Text style={styles.txtDesc}>{product.produto_desc}</Text>
              <Text style={styles.txtPrice}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}</Text>
            </View>
            {/* botao de adicionar este produto para o carrinho */}
            <TouchableOpacity style={styles.addToCart}>
              <Text style={styles.txtAddToCart}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        ) : product.produto_tipo == 'rolo' ? (
          <View style={styles.containerPurchase}>
            <View style={styles.containerPrice}>
              <Text style={styles.txtDesc}>Preço por metro linear:</Text>
              <Text style={styles.txtPrice}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}</Text>
              <Text style={styles.txtDesc}>{product.produto_desc}</Text>
            </View>
            {/* botao de adicionar este produto para o carrinho */}
            <TouchableOpacity style={styles.addToCart}>
              <Text style={styles.txtAddToCart}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        ) : null
      }
    </>

  )
}