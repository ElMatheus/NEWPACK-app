import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Guarantee = ({ onConfirm, onCancel }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.containerAlert}>
          <Text style={styles.text}>Tem certeza que gostaria de sair?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.buttonOk]} onPress={onConfirm}>
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onCancel}>
            <Text style={styles.CancelText}>Quero continuar na tela</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Guarantee;