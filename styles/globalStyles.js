import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Enhanced dark theme
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#606060', // Softer subtitle color for elegance
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Roboto',
  },
  card: {
    backgroundColor: '#f5f5f5', // Sleek card background
    borderRadius: 20,
    padding: 35,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 7,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    color: '#505050',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#505050',
    marginTop: 10,
    fontFamily: 'Roboto',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    zIndex: 10, // Ensures it overlays other content
  },
  
  modalContent: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    borderRadius: 12,
    width: '85%',  // Adjust width of the modal content
    maxHeight: '80%', // Prevent the modal from covering the entire screen
    overflowY: 'scroll', // Allows scrolling if content overflows
  },
  
  modalTitle: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  modalText: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 5,
  },
  
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    color: '#000000',
    fontSize: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 15,
    fontFamily: 'Roboto',
    borderWidth: 1,
    borderColor: '#f5f5f5',
  },
  
  // Add this to your styles (styles/globalStyles.js)
searchInput: {
  height: 40,
  borderColor: '#ccc',
  borderWidth: 1,
  margin: 10,
  paddingLeft: 10,
  borderRadius: 5,
  backgroundColor: '#fff',
},

  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: '#000000',
  },
  nutritionCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    padding: 25,
    marginVertical: 15,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  nutritionText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Roboto',
  },
  nutritionValue: {
    color: '#4CAF50',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  searchBar: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#262626',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  searchInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  searchButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
