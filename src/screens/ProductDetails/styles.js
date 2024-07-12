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
    fontSize: 15,
    color: '#000',
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
  containerPoints: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
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
});

export default styles;