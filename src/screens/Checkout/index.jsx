import { View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect, useContext, useCallback } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import GlobalLoading from '../../components/GlobalLoading';

export default function Checkout() {
  const { getProfileFromAsyncStorage, clearProfileFromAsyncStorage } = useContext(AuthContext);
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

  const teste = () => {
    console.log(profile);
  };

  const limpar = () => {
    clearProfileFromAsyncStorage()
  };

  return (
    <>
      {
        loading ? (
          <GlobalLoading />
        ) : (
          <View>
            <Text>Checkout</Text>
            <TouchableOpacity onPress={teste}>
              <Text>teste</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={limpar}>
              <Text>limpar</Text>
            </TouchableOpacity>
          </View >
        )

      }
    </>
  )

};
