import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

//CONSTANTS IMPORTS
import Colors from '../constants/colors';
  
const NumberDisplay = (props) => {
    return (
        <Text style={{...styles.text, ...props.style}}>
            {props.children}
        </Text>
    );
};
  
const styles = StyleSheet.create({
    text:{
        fontSize: 25,
        color: Colors.secondary,
        marginVertical: 10
    }
});
  
  export default NumberDisplay;