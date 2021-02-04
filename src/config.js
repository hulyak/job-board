import app from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC_7aVvIaFWL3CqGY9RmePgef3mK0O0kZc',
  authDomain: 'job-board-543d7.firebaseapp.com',
  projectId: 'job-board-543d7',
  storageBucket: 'job-board-543d7.appspot.com',
  messagingSenderId: '514716600942',
  appId: '1:514716600942:web:ecec23bf49e6467afa347f',
  measurementId: 'G-V4FYB5GPLC',
};
// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = firebase.firestore();

export { firestore, firebase, app };
