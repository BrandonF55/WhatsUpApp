
import { getFirebaseApp } from  '../firebaseHelper';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const signUp = async (Firstname, Lastname, Email, Password) => {

    const app = getFirebaseApp();
    const auth = getAuth(app);

    try {
        const result = await createUserWithEmailAndPassword(auth, Email, Password);
        console.log(result)
    } catch (error) {
        console.error(error);
        
    }
}