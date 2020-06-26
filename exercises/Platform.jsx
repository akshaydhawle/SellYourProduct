import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";

export default function AppPlatform() {
  return (
    <View style={styles.container}>
      <Text> platform code</Text>
    </View>
  );
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});
