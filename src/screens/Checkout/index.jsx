import { View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect, useContext, useCallback } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import GlobalLoading from '../../components/GlobalLoading';
import styles from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

export default function Checkout() {
  const { getProfileFromAsyncStorage, clearProfileFromAsyncStorage, user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      {
        loading || profile == null || user == null ? (
          <GlobalLoading />
        ) : (
          <View>
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
                <TouchableOpacity>
                  <Text style={styles.txtButton}>Mudar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View >
        )

      }
    </>
  )

};
