import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffff',
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: 'row',
  },
  containerCard: {
    flex: 1,
    marginLeft: 8,
  },
  containerCod: {
    backgroundColor: '#4B6584',
    padding: 4,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  cod: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 7.64219,
  },
  titlePrice: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 13,
    color: '#6A707C',
  },
  titleProduct: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    color: '#4B6584',
  },
  specifications: {
    flexDirection: 'row',
    gap: 8,
    marginTop: "auto",
  },
  specificationCard: {
    backgroundColor: '#f3f3f3',
    padding: 4,
    borderRadius: 4,
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  specificationText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#4B6584',
  },
  offerCard: {
    backgroundColor: '#4B6584',
    borderWidth: 2,
    borderColor: '#FFD700',
    shadowColor: "#FFD700",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  offerBadge: {
    position: 'absolute',
    top: -10,
    left: '50%',
    transform: [{ translateX: -45 }],
    backgroundColor: '#4B6584',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFD700',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    zIndex: 1,
  },
  offerText: {
    color: '#FFD700',
    fontFamily: 'Poppins_700Bold',
    fontSize: 12,
  },
  offerContainerCod: {
    backgroundColor: '#FFD700',
  },
  offerTitleProduct: {
    color: '#ffffff',
  },
  offerTitlePrice: {
    color: '#FFD700',
  },
  offerSpecificationCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  offerSpecificationText: {
    color: '#FFD700',
  },
});

export default styles;