import { View, TouchableOpacity, Text, ActivityIndicator, ScrollView } from 'react-native';

import Title from '../../components/Title';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import CardProduct from '../../components/CardProduct';
import PopUp from '../../components/PopUp';
import PopUp2 from '../../components/PopUp2';
import styles from './styles';

export default function Home() {
  const { user, signOut, getUsers, globalLoading, getProductsForUser } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [popUp, setPopUp] = useState(null);
  const [popUp2, setPopUp2] = useState(null);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await getProductsForUser();
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
    getAllProducts();
  }, []);

  return (
    <View style={styles.container}>
      {globalLoading ? (
        <ActivityIndicator size="large" color="#4B6584" />
      ) : (
        <View>
          <View style={styles.headerApp}>
            <View>
              <Text style={styles.txtStyle}>
                Bem Vindo,
              </Text>
              <Text style={styles.txtStyle}>
                {user.name}
              </Text>
            </View>
            <FontAwesome5
              name="shopping-cart"
              size={24}
              color="#4B6584"
              onPress={() => signOut()} />
          </View>
          <View style={styles.containerProducts}>
            <Text style={styles.title}>Pedidos recentes</Text>
            <ScrollView>
              <View style={styles.containerCards}>

                {products.length > 0 && products.map((product, index) => (
                  <CardProduct key={product.produto_id} name={product.produto_nome} image={product.produto_imagens[0]} unitary_price={product.produto_preco} toughness={product.produto_dureza} dimension={product.produto_dimensao} cod={product.produto_id} />
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  )
}