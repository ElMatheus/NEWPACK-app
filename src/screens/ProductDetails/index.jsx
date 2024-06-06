import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';

export default function ProductDetails({ route }) {
  const navigation = useNavigation();
  const { product } = route.params;
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
            <Image source={{ uri: product.produto_imagens[0] }} style={styles.image} />
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
            <TextInput style={styles.input} />
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