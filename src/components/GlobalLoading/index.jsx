import { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import styles from './styles.js';

const GlobalLoading = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="small" color="#4B6584" />
      </View>
      <Text style={styles.txtLoading}>Carregando{dots}</Text>
    </View>
  );
};

export default GlobalLoading;