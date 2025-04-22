import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';
import Constants from 'expo-constants';
import PopUp2 from '../../components/PopUp2';

export default function UserInfos() {
  const navigation = useNavigation();
  const { signOut, user, popUpMessage } = useContext(AuthContext);
  const { clearCart } = useContext(CartContext);
  const statusBarHeight = Constants.statusBarHeight;
  const [error, setError] = useState(false);

  const handleExitScreen = () => {
    navigation.goBack();
  }

  const handleExitAcc = () => {
    signOut();
    clearCart();
  }

  const handleAcessOrder = () => {
    navigation.navigate('UserOrders');
  }

  const handleAcessLocalization = () => {
    navigation.navigate('Address');
  }

  useEffect(() => {
    if (popUpMessage) {
      setError(true);
    }
  }, [popUpMessage]);


  return (
    <View style={[styles.container, { marginTop: statusBarHeight }]}>
      <View style={styles.header}>
        <AntDesign style={styles.icon} name="left" size={28} color="#000" onPress={handleExitScreen} />
        <View style={styles.containerHeader}>
          <View style={styles.containerNames}>
            <Text style={styles.titleName}>{user.name}</Text>
            <Text style={styles.textName}>{user.full_name}</Text>
          </View>
          <MaterialCommunityIcons name="account-edit" size={58} color="black" />
        </View>
      </View>
      <View style={styles.containerApp}>
        <View>
          <Text style={styles.title}>
            Recursos
          </Text>
          <View style={styles.containerResources}>
            <TouchableOpacity onPress={handleAcessLocalization} style={styles.containerCard2}>
              <Octicons name="location" size={21} color="black" />
              <Text style={styles.title2}>Localização</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAcessOrder} style={styles.containerCard}>
              <MaterialCommunityIcons name="note-multiple-outline" size={21} color="black" />
              <Text style={styles.title2}>Pedidos</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleExitAcc}>
          <View style={styles.containerButton}>
            <Ionicons name="exit-outline" size={30} color="black" />
            <Text style={styles.title}>Sair</Text>
          </View>
        </TouchableOpacity>
      </View>
      {error && <PopUp2 message={popUpMessage} exitPopUp={setError} />}
    </View>
  )
}