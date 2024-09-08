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
  containerTxtsInfo: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  txt: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#000',
  },
  txtTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#6B6B6B',
  },
  input: {
    marginTop: 5,
    width: "100%",
    backgroundColor: '#ff3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    minHeight: 93,
    backgroundColor: '#fff',
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: '#000',
    textAlignVertical: 'top',
  },
  containerInfo: {

    marginTop: 20,
    marginBottom: 20,
  },
  picker: {
    width: 100,
    marginTop: -15,
  },
  containerSelectValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAndroid: {
    width: 30,
    color: '#000',
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    marginLeft: 10,
  },
  inputIOS: {
    marginLeft: 10,
    width: 30,
    color: '#000',
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
  },
});

export default styles;