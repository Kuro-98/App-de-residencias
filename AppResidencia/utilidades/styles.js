import { Dimensions, Platform, StyleSheet, I18nManager } from 'react-native'
import Colors  from './colors';

const { height, width, heightWindow } = Dimensions.get('window')

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
    },
    centerContainer: {
        flex: 1,
        paddingHorizontal: 20
    },
      containerleft: {
        flex: 1,
        justifyContent: 'center',

        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    menuItem:{

        borderBottomWidth: 0,
        borderColor: '#fff',
        
    },
    menuText:{
      color: "#000",
      fontSize: 18,
      paddingVertical: 10,
      paddingLeft: 20
    },
    logo: {
        width: Platform.OS === 'ios' ? 40 : 40,
        height: Platform.OS === 'ios' ? 40 : 40,
        resizeMode: 'contain',
        ...Platform.select({
       
        }),
        
        marginRight: 20
      },

      logoWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
      },
      biglogo: {
        width: width * 0.8,
        height: width * 0.8 / 2,
      },
      subContain: {
        paddingHorizontal: width * 0.1,
        paddingBottom: 50,
      },
      loginForm: {},
      inputWrap: {
        flexDirection: 'row',
        alignItems: 'center',

        borderBottomWidth: 1,
      },
      input: {
        color: '#000000',
        borderColor: '#A11117',
        height: 40,
        marginTop: 10,
        marginLeft: 10,
        paddingHorizontal: 10,
        paddingTop: 0,
        paddingBottom: 8,
        flex: 1,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
      },
      loginButton: {
        marginTop: 20,
        backgroundColor: "#000",
        borderRadius: 5,
        elevation: 1,
      },
      imageButton: {
        marginTop: 20,
        backgroundColor: "#ccc",
        borderRadius: 5,
        elevation: 1,
      },
      separatorWrap: {
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
      },
      separator: {
        borderBottomWidth: 1,
        flexGrow: 1,
        borderColor: '#000000',
      },
      separatorText: {
        color: '#000000',
        paddingHorizontal: 10,
      },

      // ggButton: {
      //     marginVertical: 10,
      //     backgroundColor: Color.google,
      //     borderRadius: 5,
      // },
      signUp: {
        color: '#000000',
        marginTop: 20,
      },
      highlight: {
        fontWeight: 'bold',
        color: '#000000',
      },
      overlayLoading: {
        ...StyleSheet.absoluteFillObject,
        width,
        height,
      },
      inputContainer: {
        borderBottomColor: '#A11117',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:'100%',
        height:45,
        marginBottom:15,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#A11117',
        flex:1,
        color: "#000"
    },
    icon:{
      width:30,
      height:30,
    },
    inputIcon:{
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:'100%',
      borderRadius:30,
    },
    buttonContainerReverse: {
      height:45,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:'100%',
      borderRadius:30,
      borderColor: Colors.background,
      borderWidth: 2,
      color: Colors.background,
    },
    buttonReverse: {
      backgroundColor: '#ffffff',
    },
    loginButton: {
      backgroundColor: '#A11117',
    },
    fabookButton: {
      backgroundColor: "#3b5998",
    },
    googleButton: {
      backgroundColor: "#ff0000",
    },
    loginText: {
      color: 'white',
    },
    reverseText: {
      color: '#A11117',
    },
    restoreButtonContainer:{
      width:250,
      marginBottom:15,
      alignItems: 'flex-end'
    },
    socialButtonContent:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center', 
    },
    socialIcon:{
      color: "#FFFFFF",
      marginRight:5
    },
    scene: {
      flex: 1,
    },
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 2,
      borderColor: '#ffffff',
      borderRadius: 30,
      color: '#000000',
      backgroundColor: '#A11117',
      paddingRight: 30, // to ensure the text is never behind the icon
      marginBottom:15,
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: '#ffffff',
      borderRadius: 8,
      color: '#000000',
      backgroundColor: '#A11117',
      paddingRight: 30, // to ensure the text is never behind the icon
      marginBottom:15,
    },
    evento: {
      marginBottom: 20
    },
    infoEvento: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width:'100%',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      paddingVertical: 15,
    },
    eventoText: {
      color: '#7a7a7a'
    },
    radioButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      marginHorizontal: 15
    },
  
    circle: {
      height: 30,
      width: 30,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#A11117',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    checkedCircle: {
      width: 24,
      height: 24,
      borderRadius: 17,
      backgroundColor: '#A11117',
    },
    radioLabel: {
      marginTop: 5,
      marginLeft: 10
    },
    metodo: {
      width: '100%',
      borderBottomColor: '#cccccc',
      borderTopColor: '#cccccc',
      flexDirection: 'row',
    },
    header:{
      backgroundColor: Colors.background,
      alignContent: 'center',
     
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal:20
    },
    headerText: {
        color: "#fff",
        fontFamily: 'Roboto',
        fontSize: 18,
        textAlign: 'center',
        paddingBottom: 25
  
    },
    subText:{
      color: Colors.background
    },
    card:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 15
    },
    cardTitle:{
        fontSize:20,
        fontWeight: 'bold',
        paddingVertical: 30,
        textAlign: 'center'
    },
    datePicker:{
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      backgroundColor: '#fff',
    },
    authInputContainer: {
        borderBottomColor: 'transparent',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#fff',
        borderRadius:5,
        borderBottomWidth: 1,
        width:'100%',
        height:50,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
        marginRight: 10
    },
    authInputIconContainer:{
        backgroundColor: Colors.gris,
        height:50,
        width: 50,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    authInputIcon:{
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft:12,
    },
    authButton:{
        borderRadius:5,
        backgroundColor: Colors.verde,
        color: '#fff',
        paddingVertical: 10
    },
    authButtonText:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '400'
    },
    list: {
        paddingHorizontal: 5,
        width: '100%'
    },
    listContainer:{
        alignItems:'center',
        width: '100%'
    },
    separator: {
        marginTop: 10,
    },
    projectCard:{
        borderWidth: 2,
        borderColor: '#ccc',
        marginHorizontal: 5,
        flexBasis: '47%',
        aspectRatio: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },

    SelectedButton:{
      borderRadius:5,
      borderColor: Colors.verde,
      backgroundColor: Colors.verde,
      borderWidth: 2,
      color: Colors.gris,
      paddingVertical: 20
    },
    SelectedButtonTextBold:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    SelectedButtonTextThin:{
      color: '#fff',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: '300'
    },


    nonSelectedButton:{
      borderRadius:5,
      borderColor: Colors.gris,
      borderWidth: 2,
      color: Colors.gris,
      paddingVertical: 20
    },
    nonSelectedButtonTextBold:{
        color: Colors.gris,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    nonSelectedButtonTextThin:{
      color: Colors.gris,
      textAlign: 'center',
      fontSize: 15,
      fontWeight: '300'
    },
    roundedImage: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      overflow: "hidden",
      borderWidth: 3,

    }


});