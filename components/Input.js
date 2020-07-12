import React from 'react';
import {
    StyleSheet,
    TextInput,
} from 'react-native';
  
  
const Input = (props) => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}} />
    );
};
  
const styles = StyleSheet.create({
    input:{
        height: 50,
        borderBottomColor: "#CCCCCC",
        borderBottomWidth: 1,

    },
});
  
  export default Input;