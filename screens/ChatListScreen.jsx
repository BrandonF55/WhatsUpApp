import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native'


const ChatListScreen = props =>{


    return <View style={styles.container}>
        <Text> chat list screen</Text>
        <Button title="go to settings" onPress={() => props.navigation.navigate("ChatSettings")} />
                     {/* we are using the react navigation tools that come with the packages to navigate to the setting screen and we access them through props. and the Navigation is already */}
    </View>
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }

})

export default ChatListScreen;