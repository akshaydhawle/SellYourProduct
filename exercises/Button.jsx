import React from "react";
import { Button } from "react-native";
export default function AppButton() {
  const handleClick = () => {
    console.log("button clicked");
  };
  return <Button color="yellow" title="click me" onPress={handleClick} />;
}
