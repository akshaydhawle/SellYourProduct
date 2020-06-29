import React from 'react';
import AppScreen from '../components/AppScreen';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import colors from '../config/colors';


const listings = [
    {
        id: 1,
        title: "Red Jacket for sale",
        price: 100,
        image: require('../assets/Couch1.jpg')
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 200,
        image: require('../assets/Couch.jpg')
    },
];

const ListingsScreen = ({ navigation }) => {
    return (
        <AppScreen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listings => listings.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                        onPress={() => navigation.navigate("ListingDetails", item)}
                    />
                }
            />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.white
    }
})

export default ListingsScreen;