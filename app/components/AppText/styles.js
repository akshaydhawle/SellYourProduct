const { StyleSheet, Platform, StatusBar } = require("react-native");

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginTop: StatusBar.currentHeight,
    color: "white",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default styles;
