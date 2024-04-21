import { View, Text } from 'react-native';

import styles from './styles';

const Title = ({ txt }) => {
  return (
    <View>
      <Text style={styles.title}>{txt}</Text>
    </View>
  )
}

export default Title