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
    width: 40, // Largura fixa para o contêiner do ícone
    alignItems: 'center', // Centraliza o ícone horizontalmente
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins_600SemiBold',
  },
  txt: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#6B6B6B',
  },
  containerInps: {
    paddingHorizontal: 13,
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#F3F3F3",
    borderRadius: 5,
    padding: 16,
    gap: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#6B6B6B",
    fontFamily: 'Poppins_500Medium',
  },
  inputContainer2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#F3F3F3",
    borderRadius: 5,
    padding: 16,
    gap: 15,
    flex: 1,
  },
  containerRow: {
    flexDirection: "row",
    gap: 15,
  },
  containerBtn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 20,
  },
  btn: {
    backgroundColor: '#4B6584',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  txtBtn: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
  },
  btnRmv: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default styles;