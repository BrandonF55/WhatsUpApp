import React, { useReducer, useCallback }  from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { validateEmail, validatePassword, validateString } from '../Utils/validationContraints';
import { validateInput } from '../Utils/actions/formActions';
import reducer from '../Utils/reducers/formReducer';


const initialState = {
    inputValue:{
        Email: "",
        Password: "",

    },
    
    inputValidities: {
        Email: false,
        Password: false,
    },
    formIsValid : false

}

const SignInForm = props => {

   
    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangeHandler = useCallback( (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validateResult: result, inputValue }) 

        
    }, [dispatchFormState])
    // this is the dependence array. so it will only render when the dispatchFormState is called


    return (
            <>
                <Input
                id='Email'
                    label="Email"
                    icon="mail"
                    iconPack={Feather} 
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onInputChanged={inputChangeHandler} 
                    errorText={formState.inputValidities["Email"]}/>

                <Input
                id="Password"
                    label="Password"
                    icon="lock"
                    iconPack={FontAwesome} 
                    autoCapitalize="none"
                    secureTextEntry 
                    onInputChanged={inputChangeHandler}
                    errorText={formState.inputValidities["Password"]} />
                
                <SubmitButton
                    title="Sign in"
                    onPress={() => console.log("Button pressed")}
                    style={{ marginTop: 20 }}
                   disabled={!formState.formIsValid} 
                   />
            </>
    )
};

export default SignInForm;