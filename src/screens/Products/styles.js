import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
  },
  headerApp: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    width: '100%',
  },
  containerHeader: {
    flexDirection: 'row',
    gap: 5,
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  txtStyle: {
    fontSize: 15,
    color: '#4B6584',
    fontFamily: 'Poppins_700Bold'
  },
  txtExit: {
    fontSize: 15,
    color: '#4B6584',
    fontFamily: 'Poppins_500Medium',
  },
  containerProducts: {
    flex: 1,
    padding: 10,
  },
  containerCards: {
    gap: 8,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins_500Medium',
  },
  categories: {
    gap: 28,
    flexDirection: 'row',
  },
  txtCategories: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins_400Regular',
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
    zIndex: 2,

  },
  cartText: {
    fontSize: 10,
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
  },
  cart: {
    position: 'relative',
    padding: 10,
    backgroundColor: '#b9c3cd',
    borderRadius: 15,
    padding: 10,
    zIndex: 1,
  },
  containerButton: {
    position: 'absolute',
    top: 30,
    right: -15,
    left: -15,
    zIndex: 2,
    alignItems: 'center',
  },
  exitButton: {
    backgroundColor: '#4B6584',
    borderRadius: 5,
    padding: 10,
  },
  exitButtonText: {
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
  },
});

export default styles;