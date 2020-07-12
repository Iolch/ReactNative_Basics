import React, {
  useState
} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


//COSTUM COMPONENTS IMPORTS
import Header from './components/Header';


//SCREEN IMPORTS
import InitialGameScreen from './screens/InitalGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  // We're going to navigate with states
  const [userNumber, setUserNumber] = useState();
  const [gameNumber, setGameNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {  // this function will be called when start game inside InitialGameScreen is pressed
    setUserNumber(selectedNumber);
  }
  const gameOverHandler = (numberOfRounds, gameGuess) => {
    setGuessRounds(numberOfRounds);
    setGameNumber(gameGuess);
  }
  const restartGameHandler = () => {
    setUserNumber();
    setGameNumber();
    setGuessRounds();
  }

  let content = <InitialGameScreen onStartGame={startGameHandler}/> //the game starts with the initial screen
  if(userNumber && (guessRounds <= 0)) content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>  // when the number is set on the initial login, we change the content value
  if(gameNumber && (guessRounds > 0)) content = <GameOverScreen userChoice={userNumber} gameGuess={gameNumber} rounds={guessRounds} onRestart={restartGameHandler}/>
  if (!userNumber && !gameNumber) content = <InitialGameScreen onStartGame={startGameHandler}/> 

  return (
      <View style={styles.screen}>
        <Header title="Guess a number! :D" />
        {content}
        {/* <GameScreen userChoice={userNumber} /> */}
      </View>
  );
};

const styles = StyleSheet.create({
  screen:{ 
    flex:1,
  },
});

export default App;
