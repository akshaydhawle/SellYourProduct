import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";

export default function Touchables() {
  const handlePress = () => {
    console.log("method called");
  };

  return (
    <View>
      <TouchableOpacity style={styles.opacity} onPress={handlePress}>
        <Text>Opacity</Text>
      </TouchableOpacity>
      <TouchableHighlight style={styles.highlight}>
        <Text>highlight</Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback>
        <Text>without feedback</Text>
      </TouchableWithoutFeedback>
      <TouchableNativeFeedback style={styles.highlight}>
        <Text>Works for android</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  opacity: {
    textAlign: "center",
    padding: 20,
    margin: 10,
    backgroundColor: "white",
  },
  highlight: {
    textAlign: "center",
    padding: 20,
    margin: 10,
    backgroundColor: "white",
  },
});
