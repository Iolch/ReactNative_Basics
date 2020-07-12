import React from 'react';
import {
    Button,
    StyleSheet, 
    Text,
    View, 
} from 'react-native';

//COSTUM COMPONENTS IMPORTS
import Card from '../components/Card';
//CONSTANTS IMPORTS
import Colors from '../constants/colors';

const GameOverScreen = (props) =>{
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Game is over!</Text>

            <Card style={styles.card}>  
                
                <Text>Your Number: {props.userChoice}</Text>
                <Text>Game Guess: {props.gameGuess}</Text>
                <Text>Rounds taken: {props.rounds}</Text>
                <View style={styles.button}><Button title="Again" onPress={props.onRestart} color={Colors.secondary} /></View>
            </Card>
        </View>
    );
};
const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        marginVertical: 10,
    }, 
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    card:{
        width: "90%",
        padding: 10,
    },
    button:{
        marginTop: 10,
        width: "40%",
    },
});
export default GameOverScreen;