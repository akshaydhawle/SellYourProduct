
const App = () => {

    const showNotication = () => {
        Notifications.presentLocalNotificationAsync({
            title: "Congratulations",
            body: "Your order was successfully placed.",
        })

        // Notifications.scheduleLocalNotificationAsync({
        //   title: "Congratulations",
        //   body: "Your order was successfully placed.",
        // }, {
        //   time: new Date().getTime() + 2000,
        // })
    }

    return (
        <AppScreen>
            <Button title="Tap me" onPress={showNotication} />
        </AppScreen>
    );
}