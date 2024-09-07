import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useState, useEffect, useContext, useCallback } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import GlobalLoading from '../../components/GlobalLoading';
import styles from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import CardItem from '../../components/CardItem';
import { Picker } from '@react-native-picker/picker';

export default function Checkout() {
  const { getProfileFromAsyncStorage, clearProfileFromAsyncStorage, user } = useContext(AuthContext);
  const { cart, totalValue } = useContext(CartContext);
  const [profile, setProfile] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState(1);
  const [valueInstallment, setValueInstallment] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const fetchProfile = async () => {
        setLoading(true);
        const profileData = await getProfileFromAsyncStorage();
        if (profileData) {
          setProfile(JSON.parse(profileData));
        } else {
          navigation.navigate('UserForm');
        }
        setLoading(false);
      };

      fetchProfile();
    }, [])
  );

  useEffect(() => {
    const installment = totalValue / Number(selectedValue);
    setValueInstallment(installment);
  }, [selectedValue]);

  return (
    <>
      {
        loading || profile == null || user == null ? (
          <GlobalLoading />
        ) : (
          <ScrollView>
            <View style={styles.containerHeader}>
              <TouchableOpacity style={styles.containerIcon} onPress={() => navigation.navigate('Cart')}>
                <AntDesign style={styles.icon} name="left" size={26} color="#000" />
              </TouchableOpacity>
              <Text style={styles.titleHeader}>Finalização de Compra</Text>
            </View>
            <View style={styles.container}>
              <View style={styles.cardInfo}>
                <View style={styles.containerCard}>
                  <Feather name="truck" size={27} color="#000" />
                  <View style={styles.containerDesc}>
                    <Text style={styles.titleCard}>{user.name}</Text>
                    <Text style={styles.txtCard}>{user.cnpj}</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Text style={styles.txtButton}>Mudar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cardInfo}>
                <View style={styles.containerCard}>
                  <Feather name="user" size={27} color="#000" />
                  <View style={styles.containerDesc}>
                    <Text style={styles.titleCard}>{profile.name}</Text>
                    <Text style={styles.txtCard}>{profile.telephone}</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Text style={styles.txtButton}>Mudar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cardInfo}>
                <View style={styles.containerCard}>
                  <Feather name="map-pin" size={27} color="#000" />
                  <View style={styles.containerDesc}>
                    <Text style={styles.titleCard}>R. São Paulo, 05</Text>
                    <Text style={styles.txtCard}>Valinhos</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => console.log(cart)}>
                  <Text style={styles.txtButton}>Mudar</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.containerItems}>
              <View style={styles.containerTxts}>
                <Text style={styles.txt}>Itens selecionados</Text>
                <Text style={styles.txt}>{cart.length}</Text>
              </View>
              <View>
                {
                  cart.map((item, index) => (
                    <CardItem key={index} cod={item.produto_id} desc={item.produto_desc} image={item.produto_imagens[0]} name={item.produto_nome} price={item.total_value} quantity={item.produto_quantidade} />
                  ))
                }
              </View>
            </View>
            <View style={styles.containerObs}>
              <View style={styles.containerTxts}>
                <Text style={styles.txt}>Observações</Text>
              </View>
              <TextInput multiline={true} style={styles.input} placeholder="Adicione uma observação em seu pedido (adicionar apenas as borrachas mais macias)" />
            </View>
            <View style={styles.containerInfo}>
              <View style={styles.containerTxtsInfo}>
                <Text style={styles.txtTitle}>Subtotal</Text>
                <Text style={styles.txt}>  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValue)}</Text>
              </View>
              <View style={styles.containerTxtsInfo}>
                <Text style={styles.txtTitle}>Parcelamento</Text>
                <Picker
                  selectedValue={selectedValue}
                  itemStyle={{ backgroundColor: "grey", color: "blue", fontSize: 5 }}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="1x" value="1" />
                  <Picker.Item label="2x" value="2" />
                  {
                    totalValue >= 3000 && (
                      <Picker.Item label="3x" value="3" />
                    )
                  }
                </Picker>
              </View>
              <View style={styles.containerTxtsInfo}>
                <Text style={styles.txtTitle}>Prestação</Text>
                <Text style={styles.txt}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valueInstallment)}</Text>
              </View>
              <View style={styles.containerTxtsInfo}>
                <Text style={styles.txtTitle}>Tipo de frete</Text>
                <Text style={styles.txt}>FOB</Text>
              </View>

            </View>
          </ScrollView>
        )

      }
    </>
  )

};
