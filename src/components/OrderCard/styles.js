import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
  },
  orderDate: {
    fontSize: 16,
    color: '#4B6584',
    fontFamily: 'Poppins_600SemiBold',
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#b9c3cd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  orderTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 2,
  },
  orderTxtId: {
    fontSize: 14,
    color: '#b9c3cd',
    fontFamily: 'Poppins_400Regular',
  },
  orderStatus: {
    alignItems: 'flex-end',
  },
  statusTextGreen: {
    fontSize: 14,
    color: '#4CAF50',
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 2,
  },
  statusText: {
    fontSize: 14,
    color: '#4B6584',
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 2,
  },
  statusTextRed: {
    fontSize: 14,
    color: '#FF0000',
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 2,
  },
  orderTotal: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
  },
  productsList: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  productTextItem: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins_400Regular',
  },
  containerDetails: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  button: {
    backgroundColor: '#4B6584',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default styles;