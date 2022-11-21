import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ForgotScreen = ({navigation}) => {
    return (
        <View>
            <View style={styles.forgottext}>
                <Text style={styles.text}>Forgot your password?</Text>
            </View>
            <View style={styles.text1}>
                <Text style={styles.te}>please enter the email address associated with</Text>

            </View>

            <View style={{ alignItems: 'center' }}>
                <Text style={styles.te}>your account and we'll email you a link </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.te}>to reset your password.</Text>
            </View>
            <View style={styles.input} >
                <TextInput placeholder="Email address"/>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('VerifyScreen')}>
                <Text style={{color:'white',fontSize:20}}>Reset Password</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ForgotScreen

const styles = StyleSheet.create({
    forgottext: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    text: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text1: {
        alignSelf: 'center'
    },
    te: {
        fontSize: 16
    },
    input: {
        borderWidth: 0.5,
        marginHorizontal:20,
        marginTop:40,
        borderRadius:10,
        padding:5
    },
    button:{
        backgroundColor:'#2874A6',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        marginHorizontal:20,
        borderRadius:10
    }
})