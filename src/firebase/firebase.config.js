// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdcqwM9-eS9wZd1zYSM6I21AI-sIYF6dg",
  authDomain: "tech-net-48160.firebaseapp.com",
  projectId: "tech-net-48160",
  storageBucket: "tech-net-48160.appspot.com",
  messagingSenderId: "297993324039",
  appId: "1:297993324039:web:9a1fd9e8abe9c13e904ca2",
  measurementId: "G-TRYKCWP6H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;