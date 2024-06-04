import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: 'row',
  },
  containerCard: {
    flex: 1,
  },
  containerCod: {
    backgroundColor: '#4B6584',
    padding: 4,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  cod: {
    color: '#17202b',
    fontFamily: 'Poppins_500Medium',
  },
  image: {
    width: 106,
    height: 106,
    borderRadius: 7.64219,
  },
});

export default styles;