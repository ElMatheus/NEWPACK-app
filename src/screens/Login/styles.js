import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    gap: 40,
  },
  container: {
    alignItems: 'center',
    gap: 12,

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2f2f2f',
  },
  containerInps: {
    width: '85%',
  },
  containerInps2: {
    gap: 40,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 17,
    gap: 20,
  },
  inputTxt: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#4B6584',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonTxt: {
    color: '#fff',
    fontSize: 18,
  },
});

export default styles;