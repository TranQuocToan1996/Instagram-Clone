// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_FIREBASE_APP_ID,
//     measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const firestore = getFirestore(app);
// const storage = getStorage(app);

// export { app, auth, firestore, storage };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCeY0fF1Tm8R2CVxCmrecjw-WYiHQ6_16E",
    authDomain: "insta-clone-98d6c.firebaseapp.com",
    projectId: "insta-clone-98d6c",
    storageBucket: "insta-clone-98d6c.appspot.com",
    messagingSenderId: "873638650620",
    appId: "1:873638650620:web:1a7c3445bd6e24eea6ad79",
    measurementId: "G-JWN58S6WP2"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export { app, auth, firestore, storage };

