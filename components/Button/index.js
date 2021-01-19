import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

const Button = ({ type, text }) => {
  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const color = type === "primary" ? "#FFFFFF" : "#171A20CC";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor }]}
        onPress={() => {
          console.warn("Test");
        }}
      >
        <Text style={[styles.text, { color }]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
