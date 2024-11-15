// Import Firebase (if using modules)
import firebase from 'firebase/app';
import 'firebase/firestore'; // For Firestore
import 'firebase/auth'; // For Authentication
// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyAdjUwk8JpRKae8p3cxk70g4zLkTJqGGJ8",
    authDomain: "badlittlemonkey-6e0f4.firebaseapp.com",
    projectId: "badlittlemonkey-6e0f4",
    storageBucket: "badlittlemonkey-6e0f4.firebasestorage.app",
    messagingSenderId: "159530360843",
    appId: "1:159530360843:web:dbe70743a3db9b8a41e70e"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get references to Firestore and Auth
const db = firebase.firestore();
const auth = firebase.auth();

//login
// Function to sign up a user
function signUp(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed up:', user);
      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
  }
  // Event listener for sign-up form
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signUp(email, password);
  });
// Function to sign in a user
function signIn(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed in:', user);
      })
      .catch((error) => {
        console.error('Error signing in:', error);
      });
  }
// Event listener for login form
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signIn(email, password);
  });
  
  