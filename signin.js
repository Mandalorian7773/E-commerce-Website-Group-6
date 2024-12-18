import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBof3HgUVxGN0djTYgRv5GywnvGdohmweE",
    authDomain: "login-page-1026a.firebaseapp.com",
    projectId: "login-page-1026a",
    storageBucket: "login-page-1026a.firebasestorage.app",
    messagingSenderId: "349283384382",
    appId: "1:349283384382:web:e96a04f915e0c14f17e56f",
    measurementId: "G-6HLX5DRB1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const email = document.getElementById('emailID').value;
const password = document.getElementById('pass').value;

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById('emailID').value;
    const password = document.getElementById('pass').value; 
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Creating Account...")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})