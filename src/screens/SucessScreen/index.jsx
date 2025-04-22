import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Sharing from 'expo-sharing';
import styles from './styles';
import { useRef } from 'react';
import { captureRef } from 'react-native-view-shot';

export default function Sucess({ route }) {
  const { orderId } = route.params;
  const navigation = useNavigation();
  const imageRef = useRef(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();

  if (status === null) {
    requestPermission();
  }

  const handleSave = async () => {
    try {
      const uri = await captureRef(imageRef, {
        format: 'png',
        quality: 1,
        result: 'tmpfile', // arquivo real
      });

      await MediaLibrary.saveToLibraryAsync(uri);

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri, {
          mimeType: 'image/png',
          dialogTitle: 'Compartilhar comprovante',
        });
      } else {
        console.log('Sharing is not available on this platform');
      }

    } catch (error) {
      console.error("Erro ao compartilhar:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View ref={imageRef} collapsable={false} style={styles.card}>
        <View style={styles.checkCircle}>
          <Ionicons name="checkmark" size={40} color="#fff" />
        </View>

        <Text style={styles.title}>Pedido Concluído!</Text>
        <Text style={styles.txt}>O seu pedido foi processado com sucesso.</Text>
        <Text style={styles.orderId}>Pedido #{orderId}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSave} style={[styles.btn, styles.shareBtn]}>
            <Ionicons name="share-outline" size={24} color="#fff" style={styles.btnIcon} />
            <Text style={styles.btnTxt}>Compartilhar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ProductsTab')} style={styles.btn}>
            <Text style={styles.btnTxt}>Voltar aos Produtos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}