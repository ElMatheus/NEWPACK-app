import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
  },
  containerModal: {
    width: '100%', // Largura do modal
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  containerCards: {
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D9D9D9',
    borderBottomWidth: 1,
    width: '100%',
    padding: 10,
    gap: 10,
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins_600SemiBold',
  },
  txt: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#6B6B6B',
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default styles;