import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import PageContainer from "../components/PageContainer";

const AuthScreen = props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
           <Input label='First Name' />
            </PageContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // Add your own styles here if needed
});

export default AuthScreen;
