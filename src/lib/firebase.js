// import { seedDatabase } from "../seed";
const config = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyAaynopeTIvve5Hu8H4Cnxwv17ibxgO2aQ",
  authDomain: "intsagram-venkat.firebaseapp.com",
  projectId: "intsagram-venkat",
  storageBucket: "intsagram-venkat.appspot.com",
  messagingSenderId: "53979578558",
  appId: "1:53979578558:web:f1f73916ec0a80351c5eef",
  measurementId: "G-6Y2MQ1N6N4"

};
const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
