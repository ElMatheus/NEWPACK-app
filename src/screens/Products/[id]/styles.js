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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  containerProduct: {
    flexDirection: 'column',
    marginTop: 30,
  },
  containerCod: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    padding: 5,
    borderRadius: 4,
  },
  txtCode: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'Poppins_500Medium',
  },
  containerSpecifications: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
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
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    gap: 10,
  },
  txtQuant: {
    fontSize: 17,
    color: '#000',
    fontFamily: 'Poppins_500Medium',
  },
  input: {
    padding: 8,
    borderRadius: 8,
    width: 100,
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium',
    backgroundColor: '#f3f3f3',

  },
  containerPoints: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    position: 'absolute',
    bottom: -20,
    alignSelf: 'center',
    elevation: 5,

  },
  cartBtn: {
    backgroundColor: '#4B6584',
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    position: 'absolute',
    top: -7,
    right: -7,
    zIndex: 1,
  },
  cartText: {
    fontSize: 10,
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
  },
  conatinerHeaderShare: {
    flexDirection: 'row',
    gap: 10,

  }
});

export default styles;