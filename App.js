import React from "react";
import {
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from "react-native";
// import Touchables from "./exercises/Touchables";
// import Images from "./exercises/Images";
// import AppButton from "./exercises/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppAlert from "./exercises/Alert";
import AppButton from "./app/components/AppButton";
export default function App() {
  return <WelcomeScreen />;
}
