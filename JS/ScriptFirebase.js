// main.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBpnAvDoljnnKlj2_6J0h0mpD2jJMUeZMg",
    authDomain: "hecagruas.firebaseapp.com",
    databaseURL: "https://hecagruas-default-rtdb.firebaseio.com",
    projectId: "hecagruas",
    storageBucket: "hecagruas.appspot.com",
    messagingSenderId: "115599983241",
    appId: "1:115599983241:web:20a2db6bd320b616c43c58",
    measurementId: "G-SW2SJC303M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const listaClientes = document.getElementById('lista-clientes');
const clientesCollection = collection(db, 'Clientes');

// Obtener todos los documentos de la colección
const querySnapshot = await getDocs(clientesCollection);

// Iterar sobre los documentos y mostrar sus datos
querySnapshot.forEach((doc) => {
    const clienteData = doc.data();

    // Crear un nuevo elemento de lista y agregarlo al DOM
    const li = document.createElement('li');
    li.textContent = `Nombre: ${clienteData.Nombre}`;
    listaClientes.appendChild(li);
});
/*const docRef = doc(db, "Clientes", "8MqRcUOEu1fuh2Ci88Zf");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const clienteData = docSnap.data();

            // Crear un nuevo elemento de lista y agregarlo al DOM
            const li = document.createElement('li');
            li.textContent = `Nombre: ${clienteData.Nombre}`;
            listaClientes.appendChild(li);
        } else {
            console.log("No such document!");
        }*/