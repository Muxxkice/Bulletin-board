import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDDE33L0lDjq4wsXef8maolylZsx9kU8fw",
	authDomain: "railway-bulletin-board.firebaseapp.com",
	projectId: "railway-bulletin-board",
	storageBucket: "railway-bulletin-board.appspot.com",
	messagingSenderId: "238222108993",
	appId: "1:238222108993:web:380a97b97e72f1c30d59c0",
	measurementId: "G-B51TRC2RDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
