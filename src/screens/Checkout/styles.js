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
    flex: 1,
  },
  containerDesc: {
    flexShrink: 1,
  },
  titleCard: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    maxHeight: 25,
    flexWrap: 'wrap', // Permite quebrar o texto em palavras menores
    overflow: 'hidden', // Evita estouro
  },

  txtCard: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
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
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  containerTxtsInfo2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
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
  },
  picker: {
    width: 100,
    padding: 0,
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
  containerFinish: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    gap: 15,
  },
  txtWarning: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#000000',
  },
  btn: {
    backgroundColor: '#4B6584',
    alignItems: 'center',
    borderRadius: 6,
    paddingVertical: 12,

  },
  txtBtn: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#fff',
  },
});

export default styles;