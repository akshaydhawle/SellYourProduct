import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppAlert from "./exercises/Alert";
import AppButton from "./app/components/AppButton";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import AppScreen from "./app/components/AppScreen";
import { Button, Image, Text } from "react-native";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const logo = `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ0tcNgYjUEcuoPUqYqZYb1sHDUxBoJVzUGQ&usqp=CAU`;

const Tweets = ({ navigation }) => {
  return (
    <AppScreen>
      <Text>Tweets</Text>
      <Button title="View Tweet" onPress={() => navigation.navigate("TweetDetails", { id: 1 })} />
    </AppScreen>
  )
}
const TweetDetails = ({ route }) => {
  console.log(route.params)
  return (
    <AppScreen>
      <Text>Tweets Details- {route.params.id} </Text>
    </AppScreen>
  )
}

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
          headerShown: false
        }} />
    </Stack.Navigator>
  );
}

const Account = () => <AppScreen><Text>Account</Text></AppScreen>;

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator tabBarOptions={{
    activeBackgroundColor: "tomato",
    activeTintColor: "white",
    inactiveBackgroundColor: "#eee",
    inactiveTintColor: "black"
  }}>
    <Tab.Screen
      name="Feed"
      component={Tweets}
      options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
    // <ListingEditScreen />
    // <AppScreen>
    //   {/* <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} /> */}
    //   {/* <AppPicker
    //     selectedItem={category}
    //     onSelectItem={item => setCategory(item)}
    //     items={categories} icon="apps" placeholder="Category" />
    //   <AppTextInput icon="email" placeholder="Email" /> */}
    // </AppScreen>
  );
}
