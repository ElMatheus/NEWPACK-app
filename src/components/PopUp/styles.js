import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  teste: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 18,

  },
  container: {
    backgroundColor: "#221c1c",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 13,
    marginHorizontal: 10,
    borderRadius: 10,
    position: 'absolute',
    top: 30,
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