const reducer = (state, action) => {
    const { validateResult, inputId } = action;


    const updateValidities = {
       ...state.inputValidities,
       [inputId]: validateResult,
    };

    let updateFormIsValid = true;

    for (const key in updateValidities){
        if ( updateFormIsValid[key] !== undefined){
            updateFormIsValid = false;
            break;
            // the updateFromIsValid is setting the form as valid to start with. Then we loop through all of the inputs and if any of them are undefined we set it back to false and break out of the loop. If we fine one that is false we know the form is invalid.
        }
    }

    return {
        inputValidities: updateValidities,
        formIsValid: updateFormIsValid
    }

}

export default reducer;
