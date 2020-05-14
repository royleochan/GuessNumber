import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

import DefaultStyles from '../constants/defaultStyles'

const GameOverScreen = (props) => {
    return (
        <View style = {styles.screen}>
            <Text style = {DefaultStyles.bodyText}>The Game is OVER, the number is {props.userChoice}</Text>
            <View style = {styles.imageContainer}>
                <Image 
                    source = {require('../assets/original.png')} 
                    style = {styles.image}
                    resizeMode = "cover"/>
            </View>
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
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    }
})
