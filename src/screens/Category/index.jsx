import { View, Text } from 'react-native';

import Title from '../../components/Title';

import styles from './styles';

export default function Category() {
  return (
    <View style={styles.container}>
      <Title txt={'Category - 😁😁'} />
    </View>
  )
}