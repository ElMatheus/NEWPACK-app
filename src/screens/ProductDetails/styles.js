import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 18,
    marginTop: 20,
  },
  icon: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  image: {
    width: 358,
    height: 299,
    borderRadius: 41,
  },
  containerDetails: {
    paddingVertical: 10,
    paddingHorizontal: 13,
  },
  txtName: {
    fontSize: 22,
    color: '#4B6584',
    textAlign: 'justify',
    marginTop: 20,
    fontFamily: 'Poppins_400Regular',
  },
  containerCod: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    padding: 4,
    borderRadius: 4,
  },
  txtCode: {
    fontSize: 13,
    color: '#A7A7A7',
    fontFamily: 'Poppins_500Medium',
  },
  containerSpecifications: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#4B6584',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 5,
  },
  txtSpecification: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins_700Bold',
  },
  containerQuantity: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 20,
  },
  txtQuant: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins_500Medium',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    width: 100,
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium',
  },
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
    marginTop: 10,
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