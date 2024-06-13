import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList, Dimensions } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';

const { width } = Dimensions.get('window');

export default function ProductDetails({ route }) {
  const flatListRef = useRef();
  const navigation = useNavigation();
  const { product } = route.params;
  const [quantity, setQuantity] = useState(product.produto_quantidade);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setQuantity(product.produto_quantidade);
  }, [product.produto_quantidade]);

  const ImageSlider = ({ image }) => {
    return (
      <Image source={{ uri: image }} style={styles.image} />
    );
  }

  const handlePress = (index) => {
    setImageIndex(index);
    flatListRef.current.scrollToIndex({ animated: true, index: index }); // Scroll to the selected index
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <AntDesign style={styles.icon} name="left" size={24} color="#4B6584" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <FontAwesome5 style={styles.icon} name="shopping-cart" size={24} color="#4B6584" />
            </TouchableOpacity>
          </View>
          <View>
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
              <Feather name="tag" size={18} color="#A7A7A7" />
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
            <TextInput value={quantity.toString()} onChangeText={(text) => setQuantity(text)} style={styles.input} />
          </View>
        </View >
      </ScrollView>
      <View style={styles.containerPurchase}>
        <View style={styles.containerPrice}>
          <Text style={styles.txtDesc}>{product.produto_desc}</Text>
          <Text style={styles.txtPrice}>R${product.produto_preco}</Text>
        </View>
        <TouchableOpacity style={styles.addToCart}>
          <Text style={styles.txtAddToCart}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </>

  )
}