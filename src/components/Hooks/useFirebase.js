import Athentication from '../Firebase/firebase.init';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";


Athentication();
    

const useFirebase = () =>{
    const [user ,setUser] = useState({});
    const [error , setError] = useState('');
    

    const googleProvide = new GoogleAuthProvider();
    const auth = getAuth()

    // Google

    const googleSignIn = () =>{
       return signInWithPopup(auth , googleProvide);  
    }

    const logOut = () => {
      signOut(auth).then(() => {
        setUser({})
        
      }).catch((error) => {
        setError(error.message)
      });
    }


   onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      
    }
  });
  



    return {
        googleSignIn,
        logOut,
        setUser,
        setError,
        user,
        error
    }
}

export default useFirebase;