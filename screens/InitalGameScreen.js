import React, {
    useState
} from 'react';
import {
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

//CONSTANTS IMPORTS
import Colors from '../constants/colors';

const InitialGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState();

    const inputValueHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));  // basically this replaces everything that isnt a number by ''
    };
    return(
        // The touchable is wraping everything so that we can close the keybor by click anywhere off the input
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
            <View style={styles.screen}>

                <Text style={styles.title}>Start a new game!</Text>

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
                        onChangeText = {inputValueHandler}
                        value = {enteredValue}
                    />
                    {/* <TextInput placeholder="Type a number"/> */}
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}><Button title="Reset" onPress="" color={Colors.secondary}/></View>
                        <View style={styles.button}><Button title="Confirm" onPress="" color={Colors.primary} /></View>
                    </View>
                </Card>
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