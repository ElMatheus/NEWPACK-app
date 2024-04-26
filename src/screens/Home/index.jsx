import { View } from 'react-native';

import Title from '../../components/Title';

import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './styles';

export default function Home() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <View style={styles.container}>
      <Title txt={`Hello! ${user.name} 🤳`} />
    </View>
  )
}