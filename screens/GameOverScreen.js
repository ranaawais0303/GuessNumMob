import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import StartGameScreen from "./StartGameScreen";
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  // const [startGame, setStartGame] = useState(false);

  // function startGameHandler() {
  //   setStartGame(true);
  // }
  // if (startGame) {
  //   return <StartGameScreen />;
  // }
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/Images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        around to guess the number
        <Text style={styles.highlight}> {userNumber}</Text> .
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start a New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
