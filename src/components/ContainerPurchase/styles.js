import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerPurchase: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: "auto",
  },
  containerPrice: {
    flex: 1,
  },
  txtDesc: {
    fontSize: 16,
    color: '#A7A7A7',
    fontFamily: 'Poppins_400Regular',
  },
  txtPrice: {
    marginTop: "auto",
    fontSize: 25,
    color: '#4B6584',
    fontFamily: 'Poppins_700Bold',
  },
  addToCart: {
    backgroundColor: '#4B6584',
    padding: 6,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtAddToCart: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'Poppins_500Medium',
  },
});

export default styles;