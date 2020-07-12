import {
    StyleSheet,
  } from 'react-native';

  //CONSTANTS IMPORTS
import Colors from '../constants/colors';

  export default StyleSheet.create({
    title:{
        fontSize: 20,
        marginVertical: 10,
    }, 
    card:{
        width: "90%",
        padding: 10,
    },
    screen: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#f2f2f2"
    },
    highlight:{
        fontWeight: "bold",
        color: Colors.primary
    },
    buttonsContainer:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
  });
