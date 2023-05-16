import { validateEmail, validatePassword, validateString } from '../validationContraints';

export const validateInput = (inputId, inputValue) => {
    {
        if (inputId === 'Firstname' || inputId === 'Lastname') {
            return validateString(inputId, inputValue);

        }
        else if (inputId === 'Email') {
            return validateEmail(inputId, inputValue);

        }
        else if (inputId === 'Password') {
            return validatePassword(inputId, inputValue);

        }

    }
}