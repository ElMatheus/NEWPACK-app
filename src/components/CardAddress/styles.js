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
    paddingVertical: 10,
    marginVertical: 10,
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
    padding: 16,
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
});

export default styles;