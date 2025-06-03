import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  containerIcon: {
    marginTop: 10,
  },
  txt: {
    fontSize: 32,
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Poppins_700Bold',
  },
  containerTxt: {
    marginTop: 10,
  },
  containerInps: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerInp: {
    marginTop: 16,
  },
  txtInp: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins_500Medium',
  },
  input: {
    marginTop: 7,
    width: '100%',
    height: 56,
    backgroundColor: '#f3f3f3',
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
  },
  btn: {
    marginBottom: 10,
    width: '100%',
    height: 56,
    backgroundColor: '#4B6584',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtn: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
  },
});

export default styles;