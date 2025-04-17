import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { useContext } from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import Fontisto from '@expo/vector-icons/Fontisto';
import { AuthContext } from '../../contexts/AuthContext';

const InfoUser = ({ modalVisible, setModalVisible }) => {
  const { user } = useContext(AuthContext);
  return (
    <Modal transparent={true} animationType="slide" visible={modalVisible}>
      <TouchableOpacity style={styles.modalBackground} onPress={() => setModalVisible(false)} activeOpacity={1}>
        <TouchableWithoutFeedback>
          <View style={styles.containerModal}>
            <Text style={styles.title}>Informações da Organização</Text>
            <View style={styles.containerCards}>
              <View style={styles.card}>
                <View style={styles.iconContainer}>
                  <FontAwesome6 name="building-user" size={24} color="#6B6B6B" />
                </View>
                <Text style={styles.txt}>{user.name}</Text>
              </View>
              <View style={styles.card}>
                <View style={styles.iconContainer}>
                  <Fontisto name="file-1" size={24} color="#6B6B6B" />
                </View>
                <Text style={styles.txt}>{user.full_name}</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal >
  )
}

export default InfoUser