import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  receiptHeader: {
    alignItems: 'center',
    marginBottom: 15,
  },
  checkCircle: {
    backgroundColor: '#4CAF50',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
    marginBottom: 5,
  },
  txt: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
    textAlign: 'center',
  },
  receiptInfo: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  orderId: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#4B6584',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
    marginBottom: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusLabel: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
    marginRight: 5,
  },
  statusBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  statusBadge2: {
    backgroundColor: '#4B6584',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    width: '100%',
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  itemsContainer: {
    width: '100%',
    marginBottom: 15,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
  },
  itemQuantity: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
  },
  itemPrice: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
  },
  summaryContainer: {
    width: '100%',
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryLabel: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
  },
  totalRow: {
    marginTop: 5,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  totalLabel: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#4CAF50',
  },
  buttonContainer: {
    width: '100%',
    gap: 10,
    marginTop: 5,
  },
  btn: {
    backgroundColor: '#4B6584',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  shareBtn: {
    backgroundColor: '#4CAF50',
  },
  btnTxt: {
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    marginLeft: 8,
  }, btnIcon: {
    marginRight: 5,
  },
  paymentContainer: {
    width: '100%',
    marginBottom: 20,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  paymentLabel: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
  },
  paymentValue: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
  },
  installmentContainer: {
    width: '100%',
    marginTop: 10,
  },
  installmentTitle: {
    fontSize: 15,
    fontFamily: 'Poppins_600SemiBold',
    color: '#4B6584',
    marginBottom: 8,
  },
  installmentsList: {
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 10,
  },
  installmentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  installmentText: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
  },
  installmentValue: {
    fontSize: 13,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
  },
  image: {
    width: 200,
    height: 200,
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
  },
  containerGFG: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default styles;