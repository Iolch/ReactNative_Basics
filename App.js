import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


//COSTUM COMPONENTS IMPORTS
import Header from './components/Header';


//SCREEN IMPORTS
import InitialGameScreen from './screens/InitalGameScreen';

const App = () => {
  return (
      <View style={styles.screen}>
        <Header title="Guess a number! :D" />
        <InitialGameScreen />
      </View>
  );
};

const styles = StyleSheet.create({
  screen:{ 
    flex:1,
  },
});

export default App;
