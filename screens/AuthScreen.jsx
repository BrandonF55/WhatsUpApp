import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import PageContainer from "../components/PageContainer";
import { Feather, FontAwesome } from "@expo/vector-icons";

const AuthScreen = props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <Input
                    label='First Name'
                    icon='user-circle-o'
                    iconPack={FontAwesome}
                />

                <Input
                    label='Last Name'
                    icon='user-circle-o'
                    iconPack={FontAwesome}
                />
                <Input
                    label='Email'
                    icon='mail'
                    iconPack={Feather}
                />

                <Input
                    label='Password'
                    icon='lock'
                    iconPack={FontAwesome}
                />
            </PageContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // Add your own styles here if needed
});

export default AuthScreen;
