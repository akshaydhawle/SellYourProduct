import React from 'react';
import { AsyncStorage } from 'react-native';

const AsynStorage = () => {
    const demo = async () => {
        try {
            await AsyncStorage.setItem('person', JSON.stringify({ id: 1 }));
            const value = await AsyncStorage.getItem('person');
            const person = JSON.parse(value);
            console.log(person);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>
            <Text>Test</Text>
        </View>
    );
}

export default AsynStorage;