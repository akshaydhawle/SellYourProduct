import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from "yup";

import AppScreen from '../components/AppScreen';

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    confirmPass: Yup.string().required().min(4).label("Password")
})

const RegisterScreen = () => {
    return (
        <AppScreen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo.jpg')} />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="confirmPass"
                    placeholder="Confirm Password"
                    textContentType="password"
                    secureTextEntry
                />
                <SubmitButton color="secondary" title="Register" />
            </AppForm>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
})

export default RegisterScreen;