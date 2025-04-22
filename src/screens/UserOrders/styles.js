import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 28,
    marginTop: 10,
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Poppins_700Bold',
  },
  ordersList: {
    padding: 16,
    gap: 8,
  },

});