
import { getFirebaseApp } from '../firebaseHelper';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getDatabase, set, child, ref } from 'firebase/database';
import { async } from 'validate.js';
import { authenticate } from '../../store/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signUp = (Firstname, Lastname, Email, Password) => {
    return async dispatch => {
        const app = getFirebaseApp();
        const auth = getAuth(app);

        try {
            const result = await createUserWithEmailAndPassword(auth, Email, Password);
            const { uid, stsTokenManager } = result.user;
            const { accessToken, expirationTime  } = stsTokenManager

            const expiryDate = new Date(expirationTime)

            const userData = await createUser(Firstname, Lastname, Email, Password, uid)

            dispatch(authenticate({token: accessToken, userData}));
            saveDataToStorage(accessToken, uid, expiryDate);
        } catch (error) {
            const errorCode = error.code;

            let message = 'Something Went Wrong!'

            if (errorCode === 'auth/email-already-in-use') {
                message = "This email is already in use!"
            }

            throw new Error(message);
        }
    }

}




const createUser = async (Firstname, Lastname, Email, Password, userId) => {
    const firstLast = `${Firstname} ${Lastname}`.toLowerCase();
    // a useful way to be able to search for first and last names with a space between.
    const userData = {
        Firstname,
        Lastname,
        firstLast,
        Email,
        userId,
        signUpDate: new Date().toISOString()
        //  toISOString() this is a standard date formatter. 
    }

    const dbRef = ref(getDatabase());
    const childRef = child(dbRef, `users/${userId}`)
    await set(childRef, userData)
    return userData;
    //  this is our reference from our database. The real time database on firebase.
}

const saveDataToStorage = (token, userId, expiryDate) => {
    AsyncStorage.setItem("userData", JSON.stringify({
        token,
        userId,
        expiryDate: expiryDate.toISOString()
        // the json stringify turns a object into a string so it can be stored in the data base.

    }));
}