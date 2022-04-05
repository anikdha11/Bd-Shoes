import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confique";


const intializeFirebaseApp =()=>{
    initializeApp(firebaseConfig)
}
export default intializeFirebaseApp