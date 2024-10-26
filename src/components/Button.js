import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress, backgroundColor, textColor }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor || "#1F41BB" }]} // Default background color
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor || "black" }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 140,
    height: 60,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600", // Use numeric value for weight
    color: "#ffffff",
  },
});

export default Button;
