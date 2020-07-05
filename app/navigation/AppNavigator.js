import React, { useEffect } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewListingButton from './NewListingButton';
import useNotifications from '../hooks/useNotifications';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    useNotifications();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedNavigator}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                }}
            />
            <Tab.Screen name="ListingEdit" component={ListingEditScreen}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, size }) =>
                        <NewListingButton onPress={() => navigation.navigate("ListingEdit")} />
                })}
            />
            <Tab.Screen name="Account" component={AccountNavigator}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    )
}
export default AppNavigator;