import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
  },
  txtLoading: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: 'Poppins_500Medium',
    color: "#4B6584",
  },
  indicatorContainer: {
    transform: [{ scale: 2 }],
  }
});

export default styles;