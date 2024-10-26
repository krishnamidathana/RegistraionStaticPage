import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
} from "react-native";
import go from "../assets/images/go.png";
import fb from "../assets/images/fb.png";
import ap from "../assets/images/ap.png";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailBorderColor, setEmailBorderColor] = useState("#ccc");
  const [passwordBorderColor, setPasswordBorderColor] = useState("#ccc");

  const handleSignIn = () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Both email and password are required");
      return;
    }
    console.log("Sign-in successful!");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingContainer}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.header}>Login here</Text>
            <View style={styles.subTextContainer}>
              <Text style={styles.subText}>Welcome back, you've</Text>
              <Text style={styles.subText}>been missed !</Text>
            </View>
            <TextInput
              style={[styles.input, { borderColor: emailBorderColor }]}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setEmailBorderColor("#1F41BB")}
              onBlur={() => setEmailBorderColor("#ccc")}
            />
            <TextInput
              style={[styles.input, { borderColor: passwordBorderColor }]}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              onFocus={() => setPasswordBorderColor("#1F41BB")}
              onBlur={() => setPasswordBorderColor("#ccc")}
            />
            <TouchableOpacity disabled>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSignIn}
              style={styles.signInButton}
            >
              <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>

            {/* Create new account link */}
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.createAccountText}>Create new account</Text>
            </TouchableOpacity>
            <Text style={styles.continueText}>or continue with</Text>

            <View style={styles.imageButtonsContainer}>
              <View style={styles.imageContainer}>
                <TouchableOpacity>
                  <Image source={go} style={styles.image} />
                </TouchableOpacity>
              </View>
              <View style={styles.imageContainer}>
                <TouchableOpacity>
                  <Image source={fb} style={styles.image} />
                </TouchableOpacity>
              </View>
              <View style={styles.imageContainer}>
                <TouchableOpacity>
                  <Image source={ap} style={styles.image} />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    marginTop: 60,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1F41BB",
    marginBottom: 20,
  },
  subTextContainer: {
    marginBottom: 50,
  },
  subText: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 7,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  forgotPassword: {
    color: "#1F41BB",
    textAlign: "right",
    marginBottom: 20,
  },
  signInButton: {
    width: "100%",
    backgroundColor: "#1F41BB",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  continueText: {
    marginTop: 50,

    fontSize: 14,
    textAlign: "center",
    color: "#1f41bb",
  },
  imageButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 12,
  },
  imageContainer: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#ececec",
    borderRadius: 5,
  },
  image: {
    width: 20,
    height: 20,
  },
  createAccountText: {
    marginTop: 30,
    fontSize: 14,
    color: "#494949",
    textAlign: "center",
    fontWeight: "semibold",
  },
});

export default SignIn;
