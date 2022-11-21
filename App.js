import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/screens/SignInScreen';
import ForgotScreen from './src/screens/ForgotScreen';
import VerifyScreen from './src/screens/VerifyScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import { AuthContext, AuthProvider } from './src/screens/context/Authprovider';
import { firebase } from './config'
// import auth from '@react-native-firebase/auth';

// import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';


const Stack = createStackNavigator();

// const App = () => {
//     const { user, setUser } = useContext(AuthContext)
//     const [initializing, setInitializing] = useState(true);
//     function onAuthStateChanged(user) {
//         setUser(user);
//         if (initializing) setInitializing(false);
//     }

//     // useEffect(() => {
//     //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     //     return subscriber; // unsubscribe on unmount
//     // }, []);

//     if (initializing) return null;

//     return (
//         <NavigationContainer>
//             {user ?
//                 <Stack.Navigator>
//                     <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
//                 </Stack.Navigator> :
//                 <Stack.Navigator>
//                     <Stack.Screen name="SignInScreen" component={SignInScreen} />
//                 </Stack.Navigator>
//             }
//         </NavigationContainer>
//     )
// }

// function App() {
//     // Set an initializing state whilst Firebase connects
//     const [initializing, setInitializing] = useState(true);
//     const [user, setUser] = useState();

//     // Handle user state changes
// function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);


//     useEffect(() => {
//         const subscriber = firebase. auth().onAuthStateChanged(onAuthStateChanged);
//         return subscriber; // unsubscribe on unmount
//     }, []);

//     if (initializing) return null;

//     if (!user) {
//         return (
//             <Stack.Navigator>
//                 <Stack.Screen name="SignInScreen" component={SignInScreen} />
//             </Stack.Navigator>
// //         );
// //     }

// //     return (
//         <Stack.Navigator>
//             <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
//         </Stack.Navigator>
// //     );
// }



function App() {
    const [initializing, setInitiliazing] = useState(true)
    const [user, setUser] = useState()

    function onAuthStateChanged(user) {
        setUser(user)
        if (initializing) setInitiliazing(false)
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber;
    }, [])
    if (initializing) return null;
    if (!user) {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignInScreen'>
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
            </Stack.Navigator>
        )
    }
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignInScreen'>
            <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        </Stack.Navigator>
    )
}

// function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignInScreen'>
//                 <Stack.Screen name="SignInScreen" component={SignInScreen} />
//                 <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
//                 <Stack.Screen name="VerifyScreen" component={VerifyScreen} />

//             </Stack.Navigator>
//         </NavigationContainer>

//     );
// }
// export default App
export default () => {
    return (
        <NavigationContainer>

            <App />

        </NavigationContainer>
    )
}  
