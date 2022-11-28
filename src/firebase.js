import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMZ94YH3OiV-TwvmrvLn9wqOyO-E1Esbk",
    authDomain: "project123-e10b5.firebaseapp.com",
    projectId: "project123-e10b5",
    storageBucket: "project123-e10b5.appspot.com",
    messagingSenderId: "601427240248",
    appId: "1:601427240248:web:62ec5493cd0eaaab6e8dcd",
    measurementId: "G-3TTQ0EKKGT"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);