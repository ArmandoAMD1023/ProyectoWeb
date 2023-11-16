// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAhKL1Dn4JDFFniB0iopt4UjRtGHJg-CjE",
  authDomain: "heca-montacargaweb.firebaseapp.com",
  projectId: "heca-montacargaweb",
  storageBucket: "heca-montacargaweb.appspot.com",
  messagingSenderId: "983569671247",
  appId: "1:983569671247:web:c8f221158e593bb960b63a",
  measurementId: "G-SMFR269HYS"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Obtén la instancia de Firestore

console.log("Conexión a Firebase establecida correctamente.");
