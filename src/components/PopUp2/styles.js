import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#221c1c",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "93%",
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 10,
    position: "absolute",
    top: "5%",
  },
  icon: {
  },
  containerTxt: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
  },
});

export default styles;