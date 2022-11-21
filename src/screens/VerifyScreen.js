import { StyleSheet, Text, View ,TouchableOpacity,TextInput} from 'react-native'
import React from 'react'

const VerifyScreen = () => {
    return (
        <View>
            <View style={styles.forgottext}>
                <Text style={styles.text}>Request sent successfully!</Text>
            </View>
            <View style={styles.text1}>
                <Text style={styles.te}>We've sent a 6 digit confirmation email to your </Text>

            </View>

            <View style={{ alignItems: 'center' }}>
                <Text style={styles.te}>email. Please enter the code in below box</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.te}>to verify your email.</Text>
            </View>
            <View style={styles.input} >
                <TextInput placeholder="Email address"/>
            </View>

            <View style={styles.input} >
                <TextInput placeholder="Password" />
            </View>

            <View style={styles.input} >
                <TextInput placeholder="Confirm New Passswod"/>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={{color:'white',fontSize:20}}>Change Password</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    forgottext: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    text: {
        color: 'black',
        fontSize: 28,
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
        marginTop:30,
        borderRadius:10,
        padding:5
    },
    button:{
        backgroundColor:'#2874A6',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        marginHorizontal:20,
        borderRadius:10
    }
})

export default VerifyScreen

