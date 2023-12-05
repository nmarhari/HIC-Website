// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYxn0UFnPg7jHdiE26My10jt0kMCP7_wk",
    authDomain: "giovannis-lodge.firebaseapp.com",
    databaseURL: "https://giovannis-lodge-default-rtdb.firebaseio.com",
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

async function getNextBookingId() {
    const bookingIdRef = ref(db, 'bookingId');
    const snapshot = await get(bookingIdRef);
    const currentId = snapshot.val() || 0;
    return currentId + 1;
}

async function updateBookingId(newId) {
    await set(ref(db, 'bookingId'), newId);
}

async function InsertData() {
    const missingFields = getMissingFields();
    if(missingFields.length > 0){
        showToast(invalidMsg+missingFields.join(', '));
        return;
    }
    const bookingId = await getNextBookingId();

    set(ref(db, 'Bookings/' + bookingId), {
        Cabin: enterCabin.value,
        Name: enterName.value,
        Email: enterEmail.value,
        Phone: enterPhone.value,
        Date: enterDate.value,
        Message: enterMessage.value,
    })
        .then(() => {
            updateBookingId(bookingId);
            showToast(successMsg);
        })
        .catch((error) => {
            showToast(errorMsg)
        });
}

sendButton.addEventListener('click', InsertData);

// Input validation
// Select the toastBox by its ID
let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i>Booking submitted successfully'
let invalidMsg = '<i class="fa-solid fa-circle-xmark"></i>Can\'t submit booking without '
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Failed to reach database'

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    
    // Append the toast to the toastBox
    toastBox.appendChild(toast);

    if(msg.includes('Can\'t') || msg.includes('Failed')){
        toast.classList.add('error')
    }

    // Removes toast after time passes
    setTimeout(()=>{
        toast.remove();
    },7000)
}

function getMissingFields() {
    // Track missing fields
    let missingFields = [];

    // Check each field
    if (!enterCabin.value) {
        missingFields.push('cabin');
    }
    if (!enterName.value) {
        missingFields.push('name');
    }
    if (!enterEmail.value) {
        missingFields.push('email');
    }
    if (!enterDate.value) {
        missingFields.push('date');
    }

    return missingFields;
}