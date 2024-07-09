import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const useAnimatedScale = (trigger) => {

  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1.06,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();
  }, [trigger]);

  return scaleValue;
};

export default useAnimatedScale;