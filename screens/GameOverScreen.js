import React from 'react';
import {
    Button,
    Image,
    StyleSheet, 
    Text,
    View, 
    
} from 'react-native';

//COSTUM COMPONENTS IMPORTS
import Card from '../components/Card';
import MainButton from '../components/MainButton';

//CONSTANTS IMPORTS
import Colors from '../constants/colors';
import DefaultStyles from '../constants/defaultstyles';

const GameOverScreen = (props) =>{
    return(
        <View style={DefaultStyles.screen}>

            <View style={styles.imageContainer}>
                <Image source={require('../assets/success.png')} style={styles.image} resizeMode="cover"/>
            </View>
            <Text style={DefaultStyles.title}>Game is over!</Text>
            <Card style={DefaultStyles.card}>  
                
                <Text>Your number was <Text style={DefaultStyles.highlight}>{props.gameGuess}</Text>!</Text>
                <Text>Your phone took <Text style={DefaultStyles.highlight}>{props.rounds}</Text> rounds to get it right.</Text>
                
                <MainButton style={styles.button} color={Colors.secondary} onPress={props.onRestart}>Again</MainButton>
            </Card>
        </View>
    );
};
const styles = StyleSheet.create({
    button:{
        marginTop: 10,
        width: "40%",
    },
    imageContainer:{
        borderRadius:200,
        borderWidth: 3,
        borderColor: "#fff",
        width:"80%",
        height:250,
        overflow:"hidden",
        marginVertical: 10
    },
    image:{
        width:"100%",
        height:"100%"
    },

});
export default GameOverScreen;