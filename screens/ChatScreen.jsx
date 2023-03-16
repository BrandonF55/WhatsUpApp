import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import backGroundImage from '../assets/images/Forest.jpg'

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import colors from "../constants/colors";


const ChatScreen = props => {

    const [messageText, SetMessageText] = useState("")

    const sendMessage = useCallback(() => {
        SetMessageText("")

    }, [messageText])


    return (
        <SafeAreaView
            edges={['right', 'left', 'bottom']}
            style={styles.container}>

            <KeyboardAvoidingView 
            style={styles.screen}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            // this behavior code sets it up so it know what platform your running the app on and will adjust accordingly. 
            keyboardVerticalOffset={100}>



                <ImageBackground source={backGroundImage} style={styles.backgroundimage}>
                    <View>
                        <Text>This is some text over the background image</Text>
                    </View>
                </ImageBackground>

                <View style={styles.inputContainer}>

                    <TouchableOpacity
                        style={styles.mediaButton}>

                        <AntDesign name="pluscircle" size={24} color={colors.blue} />
                    </TouchableOpacity>

                    <TextInput
                        onSubmitEditing={sendMessage}
                        style={styles.textbox}
                        value={messageText}
                        onChangeText={text => SetMessageText(text)} />

                    {
                        messageText === "" && <TouchableOpacity
                            style={styles.mediaButton} >

                            <AntDesign name="camera" size={24} color={colors.blue} />
                        </TouchableOpacity>
                    }

                    {
                        messageText !== "" && <TouchableOpacity
                            onPress={sendMessage}
                            style={{ ...styles.mediaButton, ...styles.sendButton }} >

                            <FontAwesome name="send" size={15} color={'white'} />
                        </TouchableOpacity>
                    }

                </View>

            </KeyboardAvoidingView >
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    backgroundimage: {
        flex: 1,
        resizeMode: 'cover',
    },
    inputContainer: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingVertical: 10,
        height: 50,

    },
    screen:{
        flex: 1,
    },


    textbox: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: colors.lightGrey,
        marginHorizontal: 15,
        paddingHorizontal: 12,
    },
    mediaButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,

    },
    sendButton: {
        backgroundColor: colors.blue,
        borderRadius: 50,
        padding: 8,
    }
})

export default ChatScreen;
