// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYxn0UFnPg7jHdiE26My10jt0kMCP7_wk",
    authDomain: "giovannis-lodge.firebaseapp.com",
    projectId: "giovannis-lodge",
    storageBucket: "giovannis-lodge.appspot.com",
    messagingSenderId: "59586030149",
    appId: "1:59586030149:web:0ec06b7f3d43d16f52512c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, set, get, ref } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js"
const db = getDatabase();

var enterCabin = document.querySelector("#enterCabin");
var enterName = document.querySelector("#enterName");
var enterEmail = document.querySelector("#enterEmail");
var enterPhone = document.querySelector("#enterPhone");
var enterDate = document.querySelector("#enterDate");
var enterMessage = document.querySelector("#enterMessage");

var sendButton = document.querySelector("#sendButton")

function InsertData() {
    set( {
        Cabin: enterCabin.value,
        Name: enterName.value,
        Email: enterEmail.value,
        Phone: enterPhone.value,
        Date: enterDate.value,
        Message: enterMessage.value,
    })
    .then(()=>{
        alert("Data added successfully!")
    })
    .catch((error)=>{
        alert(error)
    });
}

sendButton.addEventListener('click', InsertData);