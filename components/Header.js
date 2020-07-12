import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
  

//CONSTANTS IMPORTS
import Colors from '../constants/colors';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};
  
const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 80,
        paddingTop: 30, 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primary
    },
    title: {
        fontSize: 25,
        color: "#ffffff",
    },
});
  
  export default Header;