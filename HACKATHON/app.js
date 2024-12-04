// Firebase Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Newsletter Form Submission
document.getElementById("newsletter-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target[0].value;

  try {
    await addDoc(collection(db, "newsletter"), { email });
    alert("Subscribed successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});
