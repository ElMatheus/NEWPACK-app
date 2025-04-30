import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 6,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'column',
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerNames: {
    flexDirection: 'column',
    flex: 1,
    marginRight: 10,
  },
  titleName: {
    fontSize: 35,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
    flexWrap: 'wrap',
  },
  textName: {
    fontSize: 17,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
    marginTop: -10,
    flexWrap: 'wrap',
    numberOfLines: 2,
  },
  containerApp: {
    flexDirection: 'column',
    marginTop: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 19,
    fontFamily: 'Poppins_500Medium',
    color: '#000',
    paddingVertical: 15,
  },
  title2: {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    color: '#000',
    paddingVertical: 15,
  },
  containerResources: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'column',
    borderColor: '#b9c3cd',
    borderWidth: 1.3,
    marginHorizontal: 10,
  },
  containerCard: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    borderTopColor: '#b9c3cd',
    borderTopWidth: 1.3,
    paddingVertical: 5,
  },
  containerCard2: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    paddingVertical: 5,
  },
  button: {
    backgroundColor: 'transparent',
    borderRadius: 99,
    borderColor: '#b9c3cd',
    borderWidth: 1.3,
    alignItems: 'center',
  },

  containerButton: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default styles;