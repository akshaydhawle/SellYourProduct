import React from "react";

import { View } from "react-native";
export default function AppFlex() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ backgroundColor: "gold", flex: 1 }} />
      <View style={{ backgroundColor: "yellow", flex: 1 }} />
      <View style={{ backgroundColor: "red", flex: 1 }} />
      <View style={{ backgroundColor: "tomato", flex: 1 }} />
    </View>
  );
}
