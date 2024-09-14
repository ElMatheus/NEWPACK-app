import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerAddress: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 20,
    paddingVertical: 14,
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
});

export default styles;