import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        width: '100%', 
        height: '100%', 
        backgroundColor: '#fff',
        padding: 40,
    },

    container: {
        margin : 10,
    },

    text: {
        fontSize: 20,
        fontWeight:'900',
        color: '#000',
    },

    heading: {
        color: '#000',
        paddingVertical: 15,
    },
    textinput:{
        color:'#000',
        borderWidth: 1,
        borderRadius: 10,
        
    },
    SaveButton: {
        position: 'absolute',
        bottom: 20,  
        width: '80%',
        alignItems: 'center',
        backgroundColor: '#019F99',
        justifyContent: 'center',
        borderRadius: 20,
        paddingVertical: 10,
      },
      SaveButtonText: {
        fontSize: 18,
        color: 'white',
      },
      btnContainer:{
        alignItems: 'center',
        marginTop:100
      }
})

export default styles;