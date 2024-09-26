import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 5,
  },
  container: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: "absolute",
    bottom: 0,
    zIndex: 10,
  },
  containerAlert: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtError: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
  },
  containerMsg: {
    marginTop: 10,
  },
  msg: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Poppins_500Medium',
  },
  user: {
    color: '#4a6584',
  },
  button: {
    backgroundColor: '#4a6584',
    padding: 10,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  txtButton: {
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
  }
});

export default styles;