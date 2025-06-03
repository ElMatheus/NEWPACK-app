import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderColor: '#D9D9D9',
    borderBottomWidth: 1,
  },
  containerInfos: {
    flexDirection: 'row',
    gap: 6,
  },
  image: {
    width: 38,
    height: 35,
  }, containerProduct: {
    marginRight: "auto",
    marginLeft: 10,
    flexShrink: 1,
    maxWidth: '65%', // Limitar largura para evitar sobreposição com o preço
  },
  containerQuantity: {
    backgroundColor: '#D9D9D9',
    width: 30,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#000',
  }, containerTxts: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap', // Impede quebra de linha dos textos
  }, txtDesc: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#4B6584',
    flexShrink: 1, // Permite que o texto seja reduzido se necessário
  },
  ellipse: {
    marginHorizontal: 5,
    marginTop: "50%",
  },
  teste: {
    height: "100%",
  },
  containerPrice: {
    paddingHorizontal: 10,
    borderColor: '#D9D9D9',
    borderLeftWidth: 1,
    marginVertical: 10,
  },
  txtPrice: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#000',
  },
  txtPrice2: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#000',
  }
});

export default styles;