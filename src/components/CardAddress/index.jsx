import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const CardAddress = ({ address }) => {
  return (
    <View style={styles.containerAddress}>
      <View style={styles.containerIcon}>
        <MaterialCommunityIcons name="home-map-marker" size={42} color="#F3F3F3" />
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{address.street}</Text>
        <Text style={styles.txt}>{address.cep}</Text>
        <Text style={styles.txt}>
          {address.city}, {address.state} - {address.number}
        </Text>
        <Text style={styles.text}>{address.freight}</Text>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <TouchableOpacity>
          <Entypo name="chevron-small-down" size={37} color="#4B6584" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CardAddress