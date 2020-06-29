import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import AppText from './AppText/AppText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';

const Card = ({ title, subTitle, image, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={image} />
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
        overflow: "hidden"
    },
    detailsContainer: {
        marginTop: 20
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        marginBottom: 10
    },
})
export default Card;