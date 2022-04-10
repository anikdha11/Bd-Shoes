import {  
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    TwitterAuthProvider,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import intializeFirebaseApp from "../Pages/Login/Firebase/firebase.init";

intializeFirebaseApp();


const useFirebase = () => {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const auth = getAuth();

    const handleGoogleSignIn = (from, navigate) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // console.log(result)
                setUser(result.user);
                saveUser(result.user);
                navigate(from, { replace: true });
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    };

    const handleTwitterSignIn = (from, navigate) => {
        setLoading(true);
        signInWithPopup(auth, twitterProvider)
            .then((result) => {
                setUser(result.user);
                navigate(from);
              
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    };
    const loginUser = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const destination = location?.state?.from || '/'
            history.replace(destination);
            setError('')
            console.log(userCredential.user)
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => setLoading(false));;
      }

    const saveUser = (newUser) => {
        const user = {
            email: newUser.email,
            role: "customer",
        };
        fetch("https://secret-badlands-82308.herokuapp.com/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        });
    };

    const handleSignOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                // console.log("Sign-out successful.");
                setUser({});
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };
    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                setUser({});
            }
            setLoading(false);
        });
    }, [auth]);
    return {
        user,
        error,
        loading,
        loginUser,
        handleGoogleSignIn,
        handleTwitterSignIn,
        handleSignOut,
        saveUser
    }
}
export default useFirebase;