import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GameOverScreen = (props) => {
    return (
        <View style = {styles.screen}>
            <Text>The Game is OVER</Text>
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})
