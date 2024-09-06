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
  },
  containerTxts: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtDesc: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#4B6584',
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