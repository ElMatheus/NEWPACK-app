import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    margin: 20,
  },
  productList: {
    backgroundColor: '#fff',
    minHeight: 300,
    borderColor: '#b9c3cd',
    borderWidth: 1,
    padding: 10,
    borderStyle: 'dashed',
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    color: '#000',
    fontFamily: 'Poppins_500Medium',
  },
  assistantView: {
    flexDirection: 'row',
    marginVertical: 10,
    gap: 6,
  },
  txt: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'Poppins_400Regular',
  },
  btn: {
    backgroundColor: '#4B6584',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  txtBtn: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
  },
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