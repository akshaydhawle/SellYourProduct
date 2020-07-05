import React from 'react';
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";


const NetInfo = () => {
    // NetInfo.fetch().then((netInfo) => console.log(netInfo));

    // const unsubscribe = NetInfo.addEventListener(netInfo => console.log(netInfo));

    const netInfo = useNetInfo();

    return <Button disabled={!netInfo.isInternetReachable} />

}

export default NetInfo;