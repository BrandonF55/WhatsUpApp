import React from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { validate } from 'validate.js';

const SignUpForm = props => {

    const inputChangeHandler = (inputId, inputValue) => {
        if (inputId === 'Firstname' || inputId === 'Lastname'){

            const constraints = {
                presence: { allowEmpty: false },
                // checks weather there is a value in the inputbox box
        

            };

            if(inputValue === ""){
                constraints.format = {
                    pattern: '[a-z]+',
                    flags: 'i',
                    // with this flat format you are saying that uppercase letter are fine.
                    message: 'Can only contain letters'

                }
            }
            validate({ [inputId]: inputValue}, {[inputId]: constraints })

        }
         else if (inputId === 'Email'){
            
        }
        else if ( inputId === 'Password') {

        }

        
    }


    return (
            <>
                <Input
                    id="Firstname"
                    label="First name"
                    icon="user-o"
                    iconPack={FontAwesome}
                    onInputChanged={inputChangeHandler} />

                <Input
                     id="Lastname"
                    label="Last name"
                    icon="user-o"
                    iconPack={FontAwesome} 
                    onInputChanged={inputChangeHandler}/>

                <Input
                     id="Email"
                    label="Email"
                    icon="mail"
                    iconPack={Feather} 
                    onInputChanged={inputChangeHandler}/>

                <Input
                     id="Password"
                    label="Password"
                    icon="lock"
                    iconPack={FontAwesome} 
                    onInputChanged={inputChangeHandler}/>
                
                <SubmitButton
                    title="Sign up"
                    onPress={() => console.log("Button pressed")}
                    style={{ marginTop: 20 }}/>
            </>
    )
};

export default SignUpForm;