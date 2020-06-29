import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppText from "../components/AppText/AppText";
import AppButton from "../components/AppButton";
const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/1.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.jpg")} />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View>
        <AppButton title="login" onPress={() => navigation.navigate("Login")} />
        <AppButton title="register" color="secondary" onPress={() => navigation.navigate("Register")} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    padding: 20,
    width: "100%"
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignSelf: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20
  }
});

export default WelcomeScreen;
