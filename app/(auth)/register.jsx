import { StyleSheet, Text, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Colors } from "../../constants/Colors";
import { useUser } from '../../hooks/useUser';
import { Link } from 'expo-router';


import ThemedView from '../../components/ThemedView';
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemeButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';


const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const { user, register } = useUser()

    const handleSubmit = async () => {
        setError(null)
        try {
            await register(email, password)
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


            <ThemedView style={styles.container}>
                <Spacer></Spacer>
                <ThemedText title={true} style={styles.title}>Register for an Account</ThemedText>
                <ThemedTextInput
                    style={{ width: "80%", marginBottom: 20 }}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}
                />

                <ThemedTextInput
                    style={{ width: "80%", marginBottom: 20 }}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                />
                <ThemeButton onPress={handleSubmit}>
                    <Text style={{ color: '#f2f2f2' }}>Register</Text>
                </ThemeButton>

                <Spacer />
                {error && <Text style={styles.error}>{error}</Text>}
                <Spacer height={100} />
                <Link href='/login'>
                    <ThemedText style={{ textAlign: "center" }}>
                        Login instead
                    </ThemedText>
                </Link>
            </ThemedView>
        </TouchableWithoutFeedback>

    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },
    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: "#f5c1c8",
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10,
    },

})