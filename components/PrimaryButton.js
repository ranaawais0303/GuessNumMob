import React from "react";
import { View, Text, Pressable } from "react-native";

function PrimaryButton({ children }) {
  return (
    <Pressable>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;
