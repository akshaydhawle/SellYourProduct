import React from "react";
import { Alert, Button, View } from "react-native";

export default function AlertBox() {
  return (
    <View>
      <Button
        title="prompt"
        onPress={() => {
          Alert.prompt("password checker", "pws", (text) => {
            console.log("prompt text", text);
          });
        }}
      />
      <Button
        title="check Alert"
        onPress={() =>
          Alert.alert("My App", "Message", [
            {
              text: "Yes",
              onPress: () => {
                console.log("yes clicked");
              },
            },
            { text: "No" },
          ])
        }
      />
    </View>
  );
}
