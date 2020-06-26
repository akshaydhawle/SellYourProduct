import React, { Component } from "react";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { View, Text, StyleSheet } from "react-native";
export default function Hooks() {
  return (
    <View style={styles.container}>
      <Text>test hooks</Text>
    </View>
  );
}
const { landscape } = useDeviceOrientation();
const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    width: "100%",
    height: landscape ? "100%" : "30%",
  },
});
