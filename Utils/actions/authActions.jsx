
import { getFirebaseApp } from  '../firebaseHelper';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const signUp = async (Firstname, Lastname, Email, Password) => {

    const app = getFirebaseApp();
    const auth = getAuth(app);

    try {
        const result = await createUserWithEmailAndPassword(auth, Email, Password);
        console.log(result)
    } catch (error) {
        const errorCode = error.code;

        let message = 'Something Went Wrong!'
        
        if (errorCode === 'auth/email-already-in-use') {
            message = "This email is already in use!"
        }

        throw new Error(message);
    }
}