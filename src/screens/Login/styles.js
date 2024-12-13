import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    zIndex: 2,
  },
  containerLogin: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    padding: 10,
    alignItems: 'center',
    borderTopLeftRadius: 58,
    borderTopRightRadius: 58,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    zIndex: 1,
    shadowRadius: 16,
  },
  containerImg: {
    alignItems: 'center',
    padding: '17%',
  },
  title: {
    fontSize: 34,
    marginTop: 70,
    marginBottom: 50,
    color: '#000',
    fontFamily: 'Poppins_700Bold',
  },
  containerInps: {
    marginTop: 45,
    width: '85%',
  },
  containerInps2: {
    gap: 43,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 20,
  },
  inputTxt: {
    color: '#000',
    flex: 1,
    fontSize: 17,
    fontFamily: 'Poppins_500Medium',
  },
  button: {
    backgroundColor: '#4B6584',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonTxt: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
  },
  showPasswordIcon: {
    position: 'absolute',
    right: 15,
    zIndex: 1,
  },
  versionText: {
    marginTop: '50%',
    textAlign: 'center',
    fontSize: 14,
    color: '#b7b7b7',
    fontFamily: 'Poppins_400Regular',
  },
});

export default styles;