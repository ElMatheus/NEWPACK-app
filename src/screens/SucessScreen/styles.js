import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  checkCircle: {
    backgroundColor: '#4CAF50',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  containerTitle: {
    marginLeft: 20,
    marginTop: 50,
    marginBottom: 17,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
    marginBottom: 10,
  },
  txt: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  orderId: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#4B6584',
    marginBottom: 20,
  },
  containerIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    marginBottom: 20,
    position: 'relative',
  },
  buttonContainer: {
    width: '100%',
    gap: 10,
  },
  btn: {
    backgroundColor: '#4B6584',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  shareBtn: {
    backgroundColor: '#4CAF50',
  },
  btnTxt: {
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    marginLeft: 8,
  },
  btnIcon: {
    marginRight: 5,
  },
  image: {
    width: 200,
    height: 200,
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
  },
  containerGFG: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default styles;