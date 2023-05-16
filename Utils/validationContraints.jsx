import { validate } from 'validate.js';

export const validateString = (id, value) => {
    const constraints = {
        presence: { allowEmpty: false },
        // checks weather there is a value in the inputbox box


    };

    if (value === "") {
        constraints.format = {
            pattern: '[a-z]+',
            flags: 'i',
            // with this flat format you are saying that uppercase letter are fine.
            message: 'Can only contain letters'

        }
    }
    const validationResults = validate({ [id]: value }, { [id]: constraints })

    return validationResults && validationResults[id];

}

export const validateEmail = (id, value) => {
    const constraints = {
        presence: { allowEmpty: false },
        // checks weather there is a value in the inputbox box


    };

    if (value === "") {
        constraints.email = true
    }
    const validationResults = validate({ [id]: value }, { [id]: constraints })

    return validationResults && validationResults[id];

}

export const validatePassword = (id, value) => {
    const constraints = {
        presence: { allowEmpty: false },
        // checks weather there is a value in the inputbox box


    };

    if (value === "") {
        constraints.length = {
            minium: 8,
            message: 'must be at least 8 characters'
        }
    }
    const validationResults = validate({ [id]: value }, { [id]: constraints })

    return validationResults && validationResults[id];

}