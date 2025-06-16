import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    zIndex: 2,
  },
  popUpContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  containerLogin: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    width: '100%',
    paddingVertical: 54,
    paddingHorizontal: 28,
    borderTopLeftRadius: 58,
    borderTopRightRadius: 58,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16,
    justifyContent: 'space-between',
  },
  containerImage: {
    paddingVertical: 58
  },
  containerInputs: {
    gap: 36,
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
    paddingVertical: 8,
  },
  button: {
    backgroundColor: '#4B6584',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 14,
  },
  buttonTxt: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
  },
  helpText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#b7b7b7',
    fontFamily: 'Poppins_400Regular',
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