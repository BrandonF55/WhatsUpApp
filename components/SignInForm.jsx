import React from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { validateEmail, validatePassword, validateString } from '../Utils/validationContraints';
import { validateInput } from '../Utils/actions/formActions';

const SignInForm = props => {

    const inputChangeHandler = (inputId, inputValue) => {
        console.log(validateInput(inputId, inputValue))

        
    }

    return (
            <>
                <Input
                id='Email'
                    label="Email"
                    icon="mail"
                    iconPack={Feather} 
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onInputChanged={inputChangeHandler} />

                <Input
                id="Password"
                    label="Password"
                    icon="lock"
                    iconPack={FontAwesome} 
                    autoCapitalize="none"
                    secureTextEntry 
                    onInputChanged={inputChangeHandler} />
                
                <SubmitButton
                    title="Sign in"
                    onPress={() => console.log("Button pressed")}
                    style={{ marginTop: 20 }}/>
            </>
    )
};

export default SignInForm;