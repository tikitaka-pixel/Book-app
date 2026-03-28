import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from "expo-router";

import ThemedView from '../components/ThemedView';
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemeText from "../components/ThemedText";

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo style={styles.img} />
            <Spacer height={20} />
            <ThemeText style={styles.title} title={true}>Awsome 1</ThemeText>

            <Spacer height={10} />
            <ThemeText style={{ marginTop: 3, marginBottom: 10 }}>Reading list app</ThemeText>
            <Spacer />
            <Link href="/login" style={styles.link}>
                <ThemeText>Login Page</ThemeText>
            </Link>
            <Link href="/register" style={styles.link}>
                <ThemeText>Register Page</ThemeText>
            </Link>
            <Link href="/profile" style={styles.link}>
                <ThemeText>Profile Page</ThemeText>
            </Link>
        </ThemedView>

    )
}

export default Home

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    img: {
        width: 100,
        height: 100,
        marginVertical: 20,

    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    },
})
