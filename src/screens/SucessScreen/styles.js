import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerTitle: {
    marginLeft: 20,
    marginTop: 50,
    width: '50%',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins_600SemiBold',
  },
  txt: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    marginHorizontal: 10,
  },
  containerIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
  },
  containerGFG: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  btn: {
    backgroundColor: '#4B6584',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    marginBottom: 30
  },
  btnTxt: {
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
  },
  image: {
    width: 200,
    height: 200,
  },
  blobSvg: {
    position: 'absolute',
    zIndex: 0,
    marginTop: 20,
    elevation: 1,
  },
});

export default styles;