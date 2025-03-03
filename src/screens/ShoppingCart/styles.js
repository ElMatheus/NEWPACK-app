import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    marginTop: 30,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
  },
  assistantView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  assistantView2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  txt: {
    fontSize: 13,
    color: '#000',
    fontFamily: 'Poppins_400Regular',
  },
  btn: {
    backgroundColor: '#4B6584',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  txtBtn: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
  },
  popUpContainer: {
    alignItems: 'center',
    zIndex: 20,
    marginTop: 26,
  },
  rightPanel: {
    paddingHorizontal: 12,
    paddingVertical: 15,
    backgroundColor: '#fff',
    // position: 'absolute',
    width: '100%',
    // bottom: 0,
  },
  title2: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
  },
  btnDeleteProduct: {
    backgroundColor: '#4B6584',
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
  },
  swipeableContainer: {
    flex: 1,
  },
  swipeableDeleteButton: {
    backgroundColor: '#ff3b30',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
  swipeHint: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginVertical: 5,
    fontFamily: 'Poppins_400Regular',
  },
  containerNo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "50%",
    gap: 12,
  },
  txtNo: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
  },
  title2No: {
    textAlign: 'center',
    fontSize: 15,
    color: '#868889',
    fontFamily: 'Poppins_500Medium',
  },
});

export default styles;