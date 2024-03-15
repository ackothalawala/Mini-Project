import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: '#fff',
      },
      headingText: {
        fontSize: 40,
        color: '#019F99',
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom:30
      },
      input: {
        height: 40,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: '#000',
      },
      submitButton: {
        alignItems: 'center',
        backgroundColor: '#0275d8',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginVertical:10
      },
      submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
      },
    
})