import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ScrollView
} from "react-native";

import DefaultStyles from "../constants/defaultStyles";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={DefaultStyles.bodyText}>
          The Game is <Text style={styles.highlight}>OVER</Text>, the number is{" "}
          <Text style={styles.highlight}>{props.userChoice}</Text>
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/original.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={DefaultStyles.bodyText}>
          Number of rounds:{" "}
          <Text style={styles.highlight}>{props.numRounds}</Text>
        </Text>
        <MainButton onPress={props.reset}>New Game</MainButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderWidth: 3,
    borderColor: "black",
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    overflow: "hidden",
    marginVertical: Dimensions.get('window').height / 30,
  },
  highlight: {
    color: "blue",
    marginVertical: 20,
  },
});
