import React, {
    useState,
    useRef,
    useEffect       // allows you to do things after every render cicle
} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  
} from 'react-native';

//COSTUM COMPONENTS IMPORTS
import Card from '../components/Card';
import NumberDisplay from '../components/NumberDisplay';

//CONSTANTS IMPORTS
import Colors from '../constants/colors';

const GameScreen = (props) => {

   
    const generateLimitedNumber = (min, max, exclude) => {
        min = Math.ceil(min);   //rounds up
        max = Math.floor(max);  //rounds down
        
        const randomNumber = Math.floor(Math.random() * (max - min)) + min; //generate a number between max and min
        if (randomNumber === exclude) { // doing this we wont guess the number at the first attempt
            return generateLimitedNumber(min, max, exclude);
        } else {
            return randomNumber;
        }
    };

    const [gameRounds, setGameRounds] = useState(0);
    const minimum = useRef(1);      // unlike the let, this wont execute again after the first load.
    const maximum = useRef(100);    // so this definition wont be reexecuted after every re-render
    
    // By doing something like this, the initial state will be set only once
    // this happens because, when the useState() function execute, it checks
    // if there is already a value inside its variable. If there is, it wont
    // change it, no matter how many times this function gets re-rendered.
    const [currentGuess, setCurrentGuess] = useState(generateLimitedNumber(minimum.current, maximum.current, props.userChoice));

    const {userChoice, onGameOver} = props;     // destructure the props array, to get and declare only what we want
    
    useEffect(() => {
        if(currentGuess === userChoice){  //here, no longer use props.userChoice or props.gameOver because we declared above
            onGameOver(gameRounds, currentGuess);
        }
    }, [onGameOver, userChoice, gameRounds, currentGuess]); // especifying the dependencies, will make that useEffect will only run if one of them changed this cicle
    


    const nextGuessHandler = (direction) => {

        if((direction == 'lower' && props.userChoice > currentGuess) || (direction == 'greater' && props.userChoice < currentGuess)){
            Alert.alert(
                'Lying is Bad!', 
                'Make your mama proud, and dont do it again, please.',
                [{text:'Ok', style:'cancel'}]
                );
            return;
        }

        if(direction === 'lower'){
            maximum.current = currentGuess;
            
        }else if( direction ==='greater'){
            minimum.current = currentGuess;
        }

        setCurrentGuess(generateLimitedNumber(minimum.current, maximum.current, currentGuess));
        setGameRounds((currentRounds) => currentRounds + 1);
    };
    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <Text>Oponent's number:</Text>
                <NumberDisplay>
                    {currentGuess}
                </NumberDisplay>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}><Button title="Lower" onPress={nextGuessHandler.bind(this, 'lower')} color={Colors.secondary}/></View>
                    <View style={styles.button}><Button title="Greater" onPress={nextGuessHandler.bind(this, 'greater')} color={Colors.primary} /></View>
                </View>
            </Card>
        </View>
    );
};
  
const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 10,
        backgroundColor:"#f2f2f2",
        alignItems: "center"
    },
    card:{
        width: "90%",
        padding: 10,
    },
    buttonsContainer:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    button:{
        width: "40%",
    },
});
  
  export default GameScreen;