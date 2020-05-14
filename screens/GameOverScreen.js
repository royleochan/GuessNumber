import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const GameOverScreen = (props) => {
    return (
        <View style = {styles.screen}>
            <Text>The Game is OVER, the number is {props.userChoice}</Text>
            <Text>Number of rounds: {props.numRounds}</Text>
            <Button title = "New Game" onPress = {props.reset}/>
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
