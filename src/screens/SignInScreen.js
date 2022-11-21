import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const handleSignup=()=>{
    //     firebase.auth.signInWithEmailAndPassword(email,password)
    //     .then(userCredentials=>{
    //         const user=userCredentials.user;
    //         console.log(user.email)
    //     })
    //     .catch(err=>alert(err.messgae))


    // }
    const signup = async (email,password) => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log(email, password)
        } catch (e) {
            alert("byy")
        }
        // auth().signInWithEmailAndPassword(email, password)
        //     .then((user)=>{
        //         console.log(user)
        //     })
        //     .catch((error)=>{
        //         alert(error)
        //     })
    }
    const login = async (email,password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log(email, password)
        } catch (e) {
            alert("byy")
        }
    }

    // const{register}=useContext(AuthContext)
    // loginUser=async (email,password)=>{
    //     try{
    //         await firebase.auth().signInWithEmailAndPassword(email,password)
    //     }catch(error){
    //         alert(error.message)
    //     }

    // }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.welocme}>
                <Text style={styles.text}>Welcome  Back! </Text>
            </View>

            <View style={{ borderWidth: 1, marginHorizontal: 20, borderRadius: 20 }}>
                <View style={styles.signin}>
                    <Text style={styles.signintext}>Sign in</Text>
                    <Text style={styles.entertext}>Enter your details below</Text>
                    <View style={{ marginTop: 20, }}>
                        <TextInput style={styles.input} placeholder="email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={{ paddingVertical: 20 }}>
                        <TextInput style={styles.input} placeholder="password"
                            value={password}
                            secureTextEntry
                            onChangeText={(text) => setPassword(text)}
                            autoCapitalize="none" />
                    </View>


                    <View style={styles.forgot}>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotScreen')}>
                            <Text style={{ color: '#2874A6' }}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity style={styles.button} onPress={()=>login(email,password)}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>signup(email,password)}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    welocme: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        borderBottomWidth: 1
    },
    signin: {
        paddingHorizontal: 10
    },
    signintext: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    },
    entertext: {
        marginTop: 15
    },
    input: {
        marginTop: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 5,
        height: 50
    },
    forgot: {
        alignItems: 'flex-end',
        color: '#2874A6'
    },
    button: {
        backgroundColor: '#2874A6',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        borderRadius: 10

    }
})