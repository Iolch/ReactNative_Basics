import React from 'react';
import {
    Image,
    StyleSheet, 
    Text,
    View, 
    TouchableOpacity
} from 'react-native';

//CONSTANTS IMPORTS
import Colors from '../constants/colors';

const MainButton = (props) => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...props.style, ...styles.button, backgroundColor: props.color}}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button:{
        paddingHorizontal:30,
        paddingVertical: 10,
        backgroundColor: Colors.primary,
        borderRadius: 3,

    },
    text:{
        color: "#FFFFFF"
    }
});
export default MainButton;