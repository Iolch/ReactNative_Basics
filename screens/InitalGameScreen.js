import React, {
    useState
} from 'react';
import {
  Alert,        //API!
  Button,
  Keyboard,         // API! NOT A COMPONENT
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

//COSTUM COMPONENTS IMPORTS
import Card from '../components/Card';
import Input from '../components/Input';
import NumberDisplay from '../components/NumberDisplay';
//CONSTANTS IMPORTS
import Colors from '../constants/colors';

const InitialGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState();
    const [valueConfirm, setValueConfirmed] = useState();
    const [selectedValue, setSelectedValue] = useState();

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));  // basically this replaces everything that isnt a number by ''
    };
    const resetInputHandler = () => {
        setValueConfirmed(false);
        setEnteredValue('');
    };
    const confirmInputHandler = () => {
        const currentNumber = parseInt(enteredValue);
        if(isNaN(currentNumber)|| currentNumber <= 0 || currentNumber > 99) {
            Alert.alert(
                        'Invalid Number!', 
                        'The number must be between 1-99.',
                        [{text:'Ok', style:'cancel', onPress: resetInputHandler}]
                        );
            return;
        }
        setValueConfirmed(true);
        setSelectedValue(currentNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };
    const gameStartHandler = () =>{
        props.onStartGame(selectedValue);
    } 

    // Here we will add something that will only render, when value confirm is true. Something like a ngif
    // To do that, we will make a variable recieve a component when confirm is true, on the bottom we will
    // display the confirmedOutput
    let confirmedOutput;
    if(valueConfirm){
        confirmedOutput =   <Card style={styles.card}>
                                <Text>Choosen number:</Text>
                                <NumberDisplay>
                                    {selectedValue}
                                </NumberDisplay>
                                <Button title="Start Game" color={Colors.primary} onPress={gameStartHandler}/>
                            </Card>
    }

    return(
        // The touchable is wraping everything so that we can close the keybor by click anywhere off the input
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
            <View style={styles.screen}>

                <Text style={styles.title}>Ho a new game!</Text>

                {/* We can pass style as props, because they are js's objects */}
                <Card style={styles.card}>  
                    <Text>Select a number!</Text>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        keyboardType="number-pad" 
                        maxLength={2}
                        onChangeText = {numberInputHandler}
                        value = {enteredValue}
                    />
                    {/* <TextInput placeholder="Type a number"/> */}
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.secondary}/></View>
                        <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
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
    title:{
        fontSize: 20,
        marginVertical: 10,
    }, 
    input:{
        width: 50,
        marginBottom: 20,
        textAlign: "center",
    }, 
});
export default InitialGameScreen;