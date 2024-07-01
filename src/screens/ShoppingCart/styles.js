import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    margin: 20,
  },
  productList: {
    backgroundColor: '#fff',
    minHeight: 300,
    borderColor: '#b9c3cd',
    borderWidth: 1,
    padding: 10,
    borderStyle: 'dashed',
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    color: '#000',
    fontFamily: 'Poppins_500Medium',
  },
  assistantView: {
    flexDirection: 'row',
    marginVertical: 10,
    gap: 6,
  },
  txt: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'Poppins_400Regular',
  },
  btn: {
    backgroundColor: '#4B6584',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  txtBtn: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
  },
});

export default styles;