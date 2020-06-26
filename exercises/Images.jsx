import React from "react";
import { View, Image } from "react-native";

export default function Images() {
  return (
    <View>
      <Image
        style={{ width: 100, height: 100, marginBottom: 20 }}
        source={require("../assets/icon.png")}
      />
      <Image
        source={{
          width: 200,
          height: 200,
          uri: "https://picsum.photos/200/300",
        }}
      />
    </View>
  );
}
