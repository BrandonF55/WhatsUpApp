import React, { useCallback, useEffect, useReducer, useState } from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { validateEmail, validatePassword, validateString } from '../Utils/validationContraints';

import { validateInput } from '../Utils/actions/formActions';
import reducer from '../Utils/reducers/formReducer';
import { signUp } from '../Utils/actions/authActions';
import { ActivityIndicator, Alert } from 'react-native';
import colors from '../constants/colors';



const initialState = {
    inputValue: {
        Firstname: "",
        Lastname: "",
        Email: "",
        Password: "",

    },
    inputValidities: {
        Firstname: false,
        Lastname: false,
        Email: false,
        Password: false,
    },
    formIsValid: false

}

const SignUpForm = props => {

    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangeHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validateResult: result, inputValue })
    }, [dispatchFormState])
    // this is the dependence array. so it will only render when the dispatchFormState is called

    useEffect(() => {
        if (error) {
            Alert.alert('An error has occurred', error)
        }
    }, [error])
    // this allows a alert to pop up on the application to inform you that the email you chose has already been choosen.

    const authHandler = async () => {
        try {
            setIsLoading(true);
            await signUp(
                formState.inputValues.Firstname,
                formState.inputValues.Lastname,
                formState.inputValues.Email,
                formState.inputValues.Password,
            );
            setError(null);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);


        }
        // this arrow function checks the auth for log in.

    }

    return (
        <>
            <Input
                id="Firstname"
                label="First name"
                icon="user-o"
                iconPack={FontAwesome}
                onInputChanged={inputChangeHandler}
                autoCapitalize="none"
                errorText={formState.inputValidities["Firstname"]} />

            <Input
                id="Lastname"
                label="Last name"
                icon="user-o"
                iconPack={FontAwesome}
                onInputChanged={inputChangeHandler}
                autoCapitalize="none"
                errorText={formState.inputValidities["Lastname"]} />

            <Input
                id="Email"
                label="Email"
                icon="mail" czxczc
                iconPack={Feather}
                onInputChanged={inputChangeHandler}
                keyboardType="email-address"
                autoCapitalize="none"
                errorText={formState.inputValidities["Email"]} />

            <Input
                id="Password"
                label="Password"
                icon="lock"
                autoCapitalize="none"
                secureTextEntry
                // when the user clicks on the password the keyword starts with lowercase letter instead of uppercase.
                //  this blocks out the password felid as they type.
                iconPack={FontAwesome}
                onInputChanged={inputChangeHandler}
                errorText={formState.inputValidities["Password"]} />

            {

                isLoading ? 
                <ActivityIndicator size={'small'} color={colors.primary} style={{ marginTop: 10 }}/> :
                // so what this is saying is, if the page is loading it will render the loading spinner. and if it isnt loading the submit button will be shown.
                <SubmitButton
                    title="Sign up"
                    onPress={authHandler}
                    style={{ marginTop: 20 }}
                    disable={!formState.formIsValid} />

            }
        </>
    )
};

export default SignUpForm;