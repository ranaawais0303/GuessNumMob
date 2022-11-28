import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

function GameOverScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Game is Over</Text>
    </View>
  );
}

export default GameOverScreen;
const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});
