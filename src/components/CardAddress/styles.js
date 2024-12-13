import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginVertical: 8,
  },
  containerAddress: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 20,
    paddingVertical: 25,
    marginVertical: 12,
    backgroundColor: "#FFFFFF",
  },
  containerIcon: {
    backgroundColor: "#4B6584",
    borderRadius: 100,
    padding: 16,
    alignItems: "center",
  },
  containerInfo: {
    flexDirection: "column",
  },
  title: {
    fontSize: 17,
    fontFamily: 'Poppins_600SemiBold',
    color: "#000",
    maxWidth: "90%",
  },
  txt: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: "#868889",
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins_600SemiBold',
    color: "#000",
  },
  containerMoreInfo: {
    backgroundColor: "#fff",
    borderColor: "#F5F5F5",
    borderWidth: 2,
    padding: 16,
  },
  containerInps: {
    paddingHorizontal: 13,
    paddingVertical: 10,
  },
  containerRow: {
    flexDirection: "row",
    gap: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#F3F3F3",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 15,
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
  input: {
    flex: 1,
    fontSize: 16,
    color: "#6B6B6B",
    fontFamily: 'Poppins_500Medium',
  },
  containerBtn: {
    flexDirection: "row",
    gap: 10,
  },
  btn: {
    backgroundColor: "#4B6584",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  btnRmv: {
    backgroundColor: "#FF6347",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  txtBtn: {
    fontSize: 12,
    color: "#fff",
    fontFamily: 'Poppins_600SemiBold',
  },
  containerSwitch: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  switchText: {
    fontSize: 16,
    color: "#000",
    fontFamily: 'Poppins_500Medium',
  },
  containerActive: {
    position: "absolute",
    top: 0,
    zIndex: 10,
    backgroundColor: "#4B6584",
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  txtActive: {
    fontSize: 12,
    color: "#F3F3F3",
    fontFamily: 'Poppins_500Medium',
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
});

export default styles;