import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import AppText from './AppText/AppText';
import colors from '../config/colors';
import { Image } from "react-native-expo-image-cache";
const Card = ({ title, subTitle, imageUrl, onPress, thumbnailUrl }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image tint="light" style={styles.image} preview={{ uri: thumbnailUrl }} uri={imageUrl} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        overflow: "hidden",
        marginBottom: 15,
        padding: 15
    },
    detailsContainer: {
        marginTop: 20
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    },
    image: {
        resizeMode: "contain",
        width: "100%",
        height: 200
    },
    title: {
        marginBottom: 10
    },
})
export default Card;