import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
    apiKey: "AIzaSyAvqq5J-6SRU8dhIplj9FHAOIrhiQxTYiY",
    authDomain: "ravtasksbd-4608c.firebaseapp.com",
    projectId: "ravtasksbd-4608c",
    storageBucket: "ravtasksbd-4608c.appspot.com",
    messagingSenderId: "463682477918",
    appId: "1:463682477918:web:f7c7f7c2bf6560855ff9cf"
  };

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);