import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const CreateAddress = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal transparent={true} animationType="slide" visible={modalVisible}>
      <TouchableOpacity style={styles.modalBackground} onPress={() => setModalVisible(false)} activeOpacity={1}>
        <TouchableWithoutFeedback>
          <View style={styles.containerModal}>
            <Text style={styles.title}>Adicionar Endereço</Text>
            <View style={styles.containerCards}>
              <View style={styles.containerInps}>
                <View style={styles.inputContainer}>
                  <Feather name="map-pin" size={24} color="#6B6B6B" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Rua"
                  />
                </View>
                <View style={styles.inputContainer}>
                  <MaterialIcons name="maps-home-work" size={19} color="#6B6B6B" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="CEP"
                  />
                </View>
                <View style={styles.containerRow}>
                  <View style={styles.inputContainer2}>
                    <SimpleLineIcons name="map" size={19} color="#6B6B6B" style={styles.icon} />
                    <TextInput
                      style={styles.input}
                      placeholder="Cidade"
                    />
                  </View>
                  <View style={styles.inputContainer2}>
                    <Feather name="globe" size={19} color="#6B6B6B" style={styles.icon} />
                    <TextInput
                      style={styles.input}
                      placeholder="Estado"
                    />
                  </View>
                </View>
                <View style={styles.inputContainer}>
                  <Feather name="grid" size={19} color="#6B6B6B" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Complemento"
                  />
                </View>
                <View style={styles.inputContainer}>
                  <MaterialCommunityIcons name="keyboard" size={19} color="#6B6B6B" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Número"
                  />
                </View>
              </View>
            </View>
            <View style={styles.containerBtn}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBtn}>Adicionar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnRmv} onPress={() => setModalVisible(false)}>
                <Text style={styles.txtBtn}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal >
  )
}

export default CreateAddress