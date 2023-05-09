
import { View, StyleSheet, Text, TextInput } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import colors from "../constants/colors";

const Input = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.label} >{props.label}</Text>

            <View style={styles.inputContainer}>

                {
                    props.icon && <props.iconPack
                        //  as long as the icon property exist it will show a icon and if it doesn't it wont
                        name={props.icon}
                        size={props.iconSize || 15}
                        style={styles.icon}

                    />

                }
                <TextInput styles={styles.input} />
            </View>

            {
                    props.errorText &&
                 <View style={styles.errorContainer}>
                 <Text style={styles.errorText}>{props.errorText}</Text>
             </View>

            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    inputContainer: {
        width: '100%',
        backgroundColor: 'red',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 2,
        backgroundColor: colors.nearlyWhite,
        flexDirection: 'row'
    },
    icon: {
        marginRight: 10,
        color: colors.grey
    },
    label: {
        marginVertical: 8,
        fontFamily: 'bold',
        letterSpacing: 0.3,
        color: colors.textColor
    },
    input: {
        color: colors.textColor,
        flex: 1,
        fontFamily: 'regular',
        letterSpacing: 0.3,
        paddingTop: 0
    },
    errorContainer: {
        marginVertical: 5

    },
    errorText: {
        color: 'red',
        fontSize: 13,
        fontFamily: 'regular',
        letterSpacing: 0.3

    }



});

export default Input;
