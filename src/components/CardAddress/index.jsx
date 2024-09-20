import { View, Text, TouchableOpacity, TextInput, Switch } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useState } from 'react';

const CardAddress = ({ address }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  return (
    <View style={styles.container}>
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
          <TouchableOpacity onPress={() => setMoreInfo(!moreInfo)}>
            {
              moreInfo ? (
                <Entypo name="chevron-small-up" size={37} color="#4B6584" />
              ) : (
                <Entypo name="chevron-small-down" size={37} color="#4B6584" />
              )
            }
          </TouchableOpacity>
        </View>
      </View>
      {
        moreInfo && (
          <View style={styles.containerMoreInfo}>
            <View style={styles.containerInps}>
              <View style={styles.inputContainer}>
                <Feather name="map-pin" size={24} color="#6B6B6B" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Rua"
                  value={address.street}
                />
              </View>
              <View style={styles.inputContainer}>
                <MaterialIcons name="maps-home-work" size={19} color="#6B6B6B" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="CEP"
                  value={address.cep}
                />
              </View>
              <View style={styles.containerRow}>
                <View style={styles.inputContainer2}>
                  <SimpleLineIcons name="map" size={19} color="#6B6B6B" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Cidade"
                    value={address.city}
                  />
                </View>
                <View style={styles.inputContainer2}>
                  <Feather name="globe" size={19} color="#6B6B6B" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Estado"
                    value={address.state}
                  />
                </View>
              </View>
              <View style={styles.inputContainer}>
                <Feather name="grid" size={19} color="#6B6B6B" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Complemento"
                  value={address.complement}
                />
              </View>
              <View style={styles.inputContainer}>
                <MaterialCommunityIcons name="keyboard" size={19} color="#6B6B6B" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Número"
                  value={String(address.number)}
                />
              </View>
              <View style={styles.containerSwitch}>
                <Switch

                />
                <Text style={styles.switchText}>Definir padrão</Text>
              </View>

            </View>
            <View style={styles.containerBtn}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBtn}>Atualiar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnRmv}>
                <Text style={styles.txtBtn}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>

        )
      }
    </View>
  )
}

export default CardAddress