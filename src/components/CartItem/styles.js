import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
    // maxWidth: 200,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  containerInfos: {
    width: '70%',
    flexDirection: 'column',
  },
  txtName: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins_700Bold',
  },
  txtPrice: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins_500Medium',
  },
  containerQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
  },
  txtQntd: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins_400Regular',
  },
  btnDeleteProduct: {
    marginLeft: 'auto',
    padding: 6,
    backgroundColor: '#F3F3F3',
    borderRadius: 100,
  },
});

export default styles;