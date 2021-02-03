import app from 'firebase/app';
import 'firebase/firestore';

console.log(process.env);
var firebaseConfig = {
  apiKey: 'AIzaSyBRdyjpoCdACclsIpcPXCGJoxLgjl75iPI',
  authDomain: 'test-job-39d45.firebaseapp.com',
  projectId: 'test-job-39d45',
  storageBucket: 'test-job-39d45.appspot.com',
  messagingSenderId: '536158590666',
  appId: '1:536158590666:web:4a7706d01cfed3947dc633',
  measurementId: 'G-X2B8DMF7PK',
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebase, firestore, app };
