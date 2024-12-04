



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_fgeAaxt-roVc_qu9UTR9YHOKcyUbjzY",
  authDomain: "hackathon-auth-a609f.firebaseapp.com",
  projectId: "hackathon-auth-a609f",
  storageBucket: "hackathon-auth-a609f.firebasestorage.app",
  messagingSenderId: "94208779763",
  appId: "1:94208779763:web:a47bf9e0580d25d38e1e86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.getElementById("submitSignUp").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form from submitting
  const email = document.getElementById("rEmail").value;
  const password = document.getElementById("rPassword").value;
  const firstName = document.getElementById("fName").value;
  const lastName = document.getElementById("lName").value;
  const phone = document.getElementById("phoneNumber").value;
  
  // Create new user with email and password
  auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // Successfully signed up
          const user = userCredential.user;
          // Update user profile with first name, last name, and phone
          user.updateProfile({
              displayName: `${firstName} ${lastName}`,
              phoneNumber: phone
          }).then(() => {
              document.getElementById("signUpMessage").textContent = "Signup successful!";
              document.getElementById("signUpMessage").style.display = "block";
          });
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          document.getElementById("signUpMessage").textContent = errorMessage;
          document.getElementById("signUpMessage").style.display = "block";
      });
});

document.getElementById("signUpButton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form from submitting
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  // Sign in user with email and password
  auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // Successfully signed in
          const user = userCredential.user;
          document.getElementById("signInMessage").textContent = "Signed in successfully!";
          document.getElementById("signInMessage").style.display = "block";
          // Redirect or show user info, etc.
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          document.getElementById("signInMessage").textContent = errorMessage;
          document.getElementById("signInMessage").style.display = "block";
      });
});
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      console.log("User is signed in: ", user);
      // Optionally, redirect or show logged-in content
  } else {
      console.log("User is not signed in.");
  }
});


