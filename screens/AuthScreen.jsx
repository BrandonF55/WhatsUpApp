import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import PageContainer from '../components/PageContainer';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import colors from '../constants/colors';

import Logo from '../assets/images/Logo.jpg';

const AuthScreen = props => {

    const [isSignUp, setIsSignUp] = useState(false);
    
    return <SafeAreaView style={{ flex: 1}}>
        <PageContainer>
            <ScrollView>

                <KeyboardAvoidingView
                    style={styles.keyboardAvoidingView}
                    behavior={Platform.OS === "ios" ? "height" : undefined}
                    keyboardVerticalOffset={100}>
                        {/* this keyboardVerticalOffset moves everything up when the keyboard appears on your phone */}

                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={Logo}
                            resizeMode='contain' />
                    </View>

                    {
                        isSignUp ?
                        <SignUpForm /> :
                        <SignInForm />
                    }

                    <TouchableOpacity
                        onPress={() => setIsSignUp(prevState => !prevState)}
                        style={styles.linkContainer}>
                        <Text style={styles.link}>{ `Switch to ${isSignUp ? "sign in" : "sign up"}` }</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>

            </ScrollView>
        </PageContainer>
    </SafeAreaView>
};

const styles = StyleSheet.create({
    linkContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },
    link: {
        color: colors.blue,
        fontFamily: 'medium',
        letterSpacing: 0.3
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '50%'
    },
    keyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center',
        
    }
})

export default AuthScreen;