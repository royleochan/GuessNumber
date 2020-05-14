import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max -min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    return rndNum;
}

const GameScreen = (props) => {
    // @refresh reset
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );

    const [rounds, setRounds] = useState(0);
    const currLow = useRef(1);
    const currHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = (direction) => {
        if ((direction === "lower" && currentGuess < props.userChoice) || (direction === "higher" && currentGuess > props.userChoice)) {
            console.log("hi");
            Alert.alert("Don't Lie!", "Its WRONG!", [{text: "Sorry!", style: "cancel"}]);
            return;
        }
        if (direction === "lower") {
            currHigh.current = currentGuess;
        } else {
            currLow.current = currentGuess;
        }
        setCurrentGuess(generateRandomBetween(currLow.current, currHigh.current, currentGuess));
        setRounds(currRounds => currRounds + 1);
    }
    

    return (
        <View style = {styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
                <Card style = {styles.buttonContainer}>
                    <Button title = "LOWER" onPress = {nextGuessHandler.bind(this, "lower")}/>
                    <Button title = "HIGHER" onPress = {nextGuessHandler.bind(this, "higher")}/>
                </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }, 
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})
