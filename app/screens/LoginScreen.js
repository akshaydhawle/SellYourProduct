import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from "yup";

import authApi from "../api/auth";
import AppScreen from '../components/AppScreen';

import { AppErrorMessage, AppForm, AppFormField, SubmitButton } from "../components/forms";
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

const LoginScreen = () => {
    const auth = useAuth();
    const [loginFailed, setloginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);
        if (!result.ok) return setloginFailed(true);

        setloginFailed(false);
        auth.logIn(result.data);
    }
    return (
        <AppScreen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo.jpg')} />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <AppErrorMessage error="Invalid email/or password." visible={loginFailed} />
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
                <SubmitButton title="Login" />
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

export default LoginScreen;