import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginTop: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
    gap: 8,
  },
  containerIcon: {
    marginTop: 10,
  },
  titleHeader: {
    fontSize: 28,
    fontFamily: 'Poppins_700Bold',
    color: '#000000',
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 28,
    backgroundColor: '#fff',
  },
  containerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
  },
  containerDesc: {
    gap: -4,
  },
  titleCard: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
  },
  txtCard: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
  },
  txtButton: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    color: '#4B6584',
  },
  container: {
    gap: 1,
  },
  containerItems: {

  },
  containerTxts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 3,
  },
  txt: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#000',
  },
});

export default styles;