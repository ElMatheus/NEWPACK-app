import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    padding: 20,
  },
  containerTitle: {
    marginLeft: 20,
    marginTop: 50,
    marginBottom: 17,
  },
  title: {
    lineHeight: 45,
    fontSize: 32,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
  },
  txt: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    marginHorizontal: 10,
    color: '#666',
    textAlign: 'center',
  },
  containerIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative',
    marginVertical: 30,
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
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
    marginBottom: 30,
    width: '80%',
    alignItems: 'center',
  },
  btnTxt: {
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
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