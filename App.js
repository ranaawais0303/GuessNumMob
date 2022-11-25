import { useState } from "react";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  //picked number handler
  function PickedNumberHadnler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  //select screen on the basis of number
  let screen = <StartGameScreen onPickNumber={PickedNumberHadnler} />;

  if (userNumber) {
    console.log(userNumber);
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        style={styles.rootScreen}
        source={require("./assets/Images/background.png")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
});
