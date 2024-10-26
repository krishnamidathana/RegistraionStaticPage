import React, { useState } from "react";
import welcome from "../assets/images/welcome.png";
import { View, Text, Image, StyleSheet } from "react-native";
import Button from "../components/Button"; // Ensure this path is correct

const Welcome = ({ navigation }) => {
  // State for button colors
  const [loginColor, setLoginColor] = useState("#1F41BB");
  const [registerColor, setRegisterColor] = useState("#FFFFFF");
  // Handle button press for login
  const handleLoginPress = () => {
    setLoginColor("#FFFFFF"); // Change to white when pressed
    setRegisterColor("#1F41BB"); // Change register color back
    navigation.navigate("SignIn"); // Navigate to Login screen
  };

  // Handle button press for register
  const handleRegisterPress = () => {
    setRegisterColor("#FFFFFF"); // Change to white when pressed
    setLoginColor("#1F41BB"); // Change login color back
    navigation.navigate("SignUp"); // Navigate to Register screen
  };

  const getTextColor = (backgroundColor) => {
    return backgroundColor === "#FFFFFF" ? "#000000" : "#FFFFFF"; // Black for white bg, white for blue bg
  };

  return (
    <View style={styles.container}>
      <Image source={welcome} style={styles.image} />
      <View>
        <Text style={styles.header}>Discover Your</Text>
        <Text style={styles.header}>Dream Job Here</Text>
      </View>
      <View>
        <Text style={styles.subText}>
          Explore all the existing job roles based on your
        </Text>
        <Text style={styles.subText}>interest and study major</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          backgroundColor={loginColor} // Pass the color state
          onPress={handleLoginPress}
          textColor={getTextColor(loginColor)}
        />
        <Button
          title="Register"
          backgroundColor={registerColor} // Pass the color state
          onPress={handleRegisterPress}
          textColor={getTextColor(registerColor)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: 300,
    height: 300,
  },
  header: {
    fontSize: 35,
    fontWeight: "600", // Numeric value for weight
    textAlign: "center",
    color: "#1F41BB",
  },
  subText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
});

export default Welcome;
