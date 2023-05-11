import React from 'react';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { Feather, FontAwesome } from '@expo/vector-icons';

const SignInForm = props => {


  

    return (
            <>
                <Input
                    label="Email"
                    icon="mail"
                    iconPack={Feather} />

                <Input
                    label="Password"
                    icon="lock"
                    iconPack={FontAwesome} />
                
                <SubmitButton
                    title="Sign in"
                    onPress={() => console.log("Button pressed")}
                    style={{ marginTop: 20 }}/>
            </>
    )
};

export default SignInForm;





{/* <Input
label='Email'
icon='mail'
iconPack={Feather}
/>

<Input
label='Password'
icon='lock'
iconPack={FontAwesome}
/>
<SubmitButton
title='Sign In'
onPress={() => console.log('button pressed')}
style={{ marginTop: 20 }}
/>
</>
)


}; */}