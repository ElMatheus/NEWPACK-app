import { View, Text } from 'react-native';

import Title from '../../components/Title';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './styles';

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Title txt={`Hello! ${user.name} 🤳`} />
    </View>
  )
}