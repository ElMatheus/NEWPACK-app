import { View, ActivityIndicator } from 'react-native';
import styles from './styles.js';

const GlobalLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#4B6584" />
    </View>
  )
}

export default GlobalLoading;