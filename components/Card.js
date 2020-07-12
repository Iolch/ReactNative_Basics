import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
  
  
const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
};
  
const styles = StyleSheet.create({
    card:{
        // width: "90%",                //Agora são definidos em props.style
        // padding: 10,
        marginVertical: 20,
        backgroundColor: "#ffffff",
        alignItems: "center",
        shadowColor: "#000000",                    //Only works on ios
        shadowOffset: {width:0, height:2},      //Only works on ios
        shadowOpacity: 0.25,                    //Only works on ios
        shadowRadius: 6,                        //Only works on ios
        elevation: 5

    },
});
  
  export default Card;