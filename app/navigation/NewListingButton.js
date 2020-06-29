import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: 40,
        borderWidth: 10,
        bottom: 20,
        height: 80,
        width: 80,
        justifyContent: "center"
    }
});

export default NewListingButton;