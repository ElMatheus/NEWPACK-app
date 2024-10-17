import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
  },
  txt: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
  btn: {
    backgroundColor: '#4B6584',
    padding: 10,
    marginTop: 10,
    borderRadius: 5
  },
  btnTxt: {
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
  }
});

export default styles;