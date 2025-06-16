import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
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
  content: {
    flex: 1,
    padding: 16,
  }, section: {
    borderRadius: 8,
    padding: 18,
    marginBottom: 24,
  },
  sectionIcon: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 12,
    color: '#4B6584',
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#555',
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
  }, contactSection: {
    marginBottom: 24,
  },
  contactSectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 16,
    color: '#333',
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#b9c3cd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 8,
  },
  contactIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactInfo: {
    flex: 1,
    marginLeft: 16,
  }, contactTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
  },
  contactSubtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
    fontFamily: 'Poppins_400Regular',
  },
  faqSection: {
    marginBottom: 30,
  }, faqTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 16,
    color: '#333',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }, cardQuestion: {
    fontSize: 15,
    flex: 1,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
    paddingRight: 10,
  },
  cardBody: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  cardAnswer: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
    fontFamily: 'Poppins_400Regular',
  }
});