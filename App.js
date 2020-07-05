import React, { useState } from "react";
import { AppLoading, Notifications } from "expo";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";
import AppScreen from "./app/components/AppScreen";
import { Button } from "react-native";

const logo = `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ0tcNgYjUEcuoPUqYqZYb1sHDUxBoJVzUGQ&usqp=CAU`;

const App = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  }
  if (!isReady)
    return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;



// export default async function App() {
//   // await AsyncStorage.setItem('mypage', JSON.stringify({ id: 1 }));
//   // const data = await AsyncStorage.getItem('mypage');
//   // console.log('data', JSON.parse(data));
//   return (
//     <NavigationContainer theme={navigationTheme}>
//       <AppNavigator />
//     </NavigationContainer>
//     // <ListingEditScreen />
//     // <AppScreen>
//     //   {/* <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} /> */}
//     //   {/* <AppPicker
//     //     selectedItem={category}
//     //     onSelectItem={item => setCategory(item)}
//     //     items={categories} icon="apps" placeholder="Category" />
//     //   <AppTextInput icon="email" placeholder="Email" /> */}
//     // </AppScreen>
//   );
// }
