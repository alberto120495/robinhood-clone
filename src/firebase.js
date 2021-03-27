import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrCi_FNYlrSUQoTGxpssuPiw0l8mgSIuk",
  authDomain: "robinhood-clone-6f22e.firebaseapp.com",
  databaseURL: "https://robinhood-clone-6f22e.firebaseio.com",
  projectId: "robinhood-clone-6f22e",
  storageBucket: "robinhood-clone-6f22e.appspot.com",
  messagingSenderId: "929050369374",
  appId: "1:929050369374:web:1c9b8380e322d9a0f143cf",
  measurementId: "G-VK4PNWZWSJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
