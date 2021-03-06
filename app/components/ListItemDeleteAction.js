import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ListItemDeleteAction = ({ onPress }) => {
    return (
        <View style={styles.container} >
            <TouchableWithoutFeedback onPress={onPress}>
                <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ListItemDeleteAction;