import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
  },
  headerApp: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#4B6584',
  },
  txtStyle: {
    fontSize: 15,
    color: '#4B6584',
    fontFamily: 'Poppins_700Bold'
  },
  containerProducts: {
    flex: 1,
    padding: 10,
    marginTop: 20,
  },
  containerCards: {
    gap: 8,
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins_500Medium',
  },
  categories: {
    gap: 28,

    flexDirection: 'row',
  },
  txtCategories: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins_400Regular',
  },
});

export default styles;