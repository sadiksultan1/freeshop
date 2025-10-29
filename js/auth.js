// js/auth.js
import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Signup function
export async function signupUser(name, email, password){
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save additional info to Firestore
        await setDoc(doc(db, "users", user.uid), { name, email });
        return { success:true, user };
    }catch(err){
        return { success:false, error: err.message };
    }
}

// Login function
export async function loginUser(email, password){
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success:true, user: userCredential.user };
    }catch(err){
        return { success:false, error: err.message };
    }
}
