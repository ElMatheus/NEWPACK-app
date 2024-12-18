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
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    zIndex: 10,
  },
  containerAlert: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
  },
  buttonOk: {
    backgroundColor: '#4B6584',
  },
  CancelText: {
    color: '#4B6584',
    fontFamily: 'Poppins_500Medium',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
  },
});

export default styles;