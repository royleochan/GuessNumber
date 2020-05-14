import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import DefaultStyles from '../constants/defaultStyles'
import MainButton from '../components/MainButton'

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
            <Text style = {DefaultStyles.bodyText}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
                <Card style = {styles.buttonContainer}>
                    <MainButton onPress = {nextGuessHandler.bind(this, "lower")}><Ionicons name = "md-remove" size = {24} color = "white"/></MainButton>
                    <MainButton onPress = {nextGuessHandler.bind(this, "higher")}><Ionicons name = "md-add" size = {24} color = "white"/></MainButton>
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
        width: 400,
        maxWidth: '90%'
    }
})
