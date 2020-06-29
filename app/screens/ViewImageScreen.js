import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
      </View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFbgLeRdElqQrO4MEs4WXqJp47QX0aQYmQtQ&usqp=CAU",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
