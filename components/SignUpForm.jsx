import React, { useReducer } from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { validateEmail, validatePassword, validateString } from '../Utils/validationContraints';
import { validateInput } from '../Utils/actions/formActions';


const reducer = (state, action) => {

}

const initialState = {
    inputValidities: {
        Firstname: false,
        Lastname: false,
        Email: false,
        Password: false,
    },
    formIsValid : false

}

const SignUpForm = props => {


    const SignUpForm = [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangeHandler = (inputId, inputValue) => {
      console.log(validateInput(inputId, inputValue))

        
    }

    return (
            <>
                <Input
                    id="Firstname"
                    label="First name"
                    icon="user-o"
                    iconPack={FontAwesome}
                    onInputChanged={inputChangeHandler} 
                    autoCapitalize="none"/>

                <Input
                     id="Lastname"
                    label="Last name"
                    icon="user-o"
                    iconPack={FontAwesome} 
                    onInputChanged={inputChangeHandler}
                    autoCapitalize="none"/>

                <Input
                     id="Email"
                    label="Email"
                    icon="mail"
                    iconPack={Feather} 
                    onInputChanged={inputChangeHandler}
                    keyboardType="email-address"
                    autoCapitalize="none"/>

                <Input
                     id="Password"
                    label="Password"
                    icon="lock"
                    autoCapitalize="none"
                    secureTextEntry
                    // when the user clicks on the password the keyword starts with lowercase letter instead of uppercase.
                    //  this blocks out the password felid as they type.
                    iconPack={FontAwesome} 
                    onInputChanged={inputChangeHandler}/>
                
                <SubmitButton
                    title="Sign up"
                    onPress={() => console.log("Button pressed")}
                    style={{ marginTop: 20 }}
                    disable={!formState.formIsValid}/>
            </>
    )
};

export default SignUpForm;