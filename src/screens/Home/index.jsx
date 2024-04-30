import { View, TouchableOpacity, Text } from 'react-native';

import Title from '../../components/Title';

import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './styles';

export default function Home() {
  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    console.log(user);
  }, []);

  const handleLogout = async () => {
    await signOut();
  }

  return (
    <View style={styles.container}>
      <Title txt={`Hello! ${user.name} 🤳`} />
      <TouchableOpacity onPress={handleLogout}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}