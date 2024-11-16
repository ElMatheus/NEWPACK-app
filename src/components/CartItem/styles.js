import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginVertical: 7,
    backgroundColor: '#Ffff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    // maxWidth: 200,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  containerInfos: {
    flexDirection: 'column',
    maxWidth: 230,
  },
  txtName: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'Poppins_700Bold',
  },
  txtPrice: {
    fontSize: 12,
    color: '#4A6584',
    fontFamily: 'Poppins_500Medium',
  },
  containerQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
  },
  txtQntd: {
    fontSize: 15,
    color: '#4A6584',
    fontFamily: 'Poppins_500Medium',
  },
  btnDeleteProduct: {
    marginLeft: 'auto',
    padding: 9,
    backgroundColor: '#F3F3F3',
    borderRadius: 100,
    marginRight: 5,
  },
  containerDesc: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  txtDesc: {
    fontSize: 12,
    color: '#4A6584',
    fontFamily: 'Poppins_500Medium',
  },
  containerQuant: {
    alignItems: 'center',
    gap: 10,
    marginLeft: 'auto',
  },
});

export default styles;