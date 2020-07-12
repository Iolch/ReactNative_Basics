import React, {
    useState,
    useRef,
    useEffect       // allows you to do things after every render cicle
} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

//COSTUM COMPONENTS IMPORTS
import Card from '../components/Card';
import NumberDisplay from '../components/NumberDisplay';
import MainButton from '../components/MainButton';

//CONSTANTS IMPORTS
import Colors from '../constants/colors';

import DefaultStyles from '../constants/defaultstyles';

const GameScreen = (props) => {
    const minimum = useRef(1);      // unlike the let, this wont execute again after the first load.
    const maximum = useRef(100);    // so this definition wont be reexecuted after every re-render

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

    const initialGuess = generateLimitedNumber(minimum.current, maximum.current, props.userChoice);

    // We want to store the guesses through out the game
    const [guesses, setGuesses] = useState([initialGuess.toString()]);

    
    // By doing something like this, the initial state will be set only once
    // this happens because, when the useState() function execute, it checks
    // if there is already a value inside its variable. If there is, it wont
    // change it, no matter how many times this function gets re-rendered.
    const [currentGuess, setCurrentGuess] = useState([initialGuess]);

    


    const {userChoice, onGameOver} = props;     // destructure the props array, to get and declare only what we want
    
    useEffect(() => {
        if(currentGuess === userChoice){  //here, no longer use props.userChoice or props.gameOver because we declared above
            onGameOver(guesses.length, currentGuess);
        }
    }, [onGameOver, userChoice, guesses.length, currentGuess]); // especifying the dependencies, will make that useEffect will only run if one of them changed this cicle


    const renderListItem = (listLenght, itemData) => {
        return (
            <View style={DefaultStyles.buttonsContainer}>
                <Text>#{listLenght - itemData.index}</Text>
                <Text>{itemData.item}</Text>
            </View>
        );     
    };
   
   

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
            minimum.current = currentGuess + 1;     //doing that, because randon includes lower boundary
        }

        const nextNumber = generateLimitedNumber(minimum.current, maximum.current, currentGuess);

        setCurrentGuess(nextNumber);
        setGuesses((currentGuesses) => [nextNumber.toString(), ...currentGuesses]);
        
    };
    return (
        <View style={DefaultStyles.screen}>
            <Card style={DefaultStyles.card}>
                <Text>Oponent's number:</Text>
                <NumberDisplay>
                    {currentGuess}
                </NumberDisplay>
                <View style={DefaultStyles.buttonsContainer}>
                        <MainButton color={Colors.secondary} onPress={nextGuessHandler.bind(this, 'lower')}>Lower</MainButton>
                        <MainButton color={Colors.primary} onPress={nextGuessHandler.bind(this, 'greater')}>Greater</MainButton>
                </View>
            </Card>

            <Card style={DefaultStyles.card}>
                <Text style={[DefaultStyles.title, DefaultStyles.highlight]}>Previous Guesses: </Text>
                <FlatList 
                    keyExtractor={(item) => item}
                    data={guesses} 
                    renderItem = {renderListItem.bind(this, guesses.length)}
                />
            </Card>
        </View>
    );
};
  
const styles = StyleSheet.create({
    
    button:{
        width: "40%",
    },
    listContainer:{
        flex: 1, 
        width: "80%"
    }
});
  
  export default GameScreen;