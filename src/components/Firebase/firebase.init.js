import firebaseConfig from "./firebase.cnfig";
import { initializeApp } from "firebase/app";

const Athentication = () => {
    return initializeApp(firebaseConfig);
}

export default Athentication;