

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";

 import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } 
 from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
 
 // Your web app's Firebase configuration
   const firebaseConfig = {
     apiKey: "AIzaSyA_eoEmY61zizbmj_A2pI1ooA1Q25V8GBI",
     authDomain: "auth-af925.firebaseapp.com",
     databaseURL: "https://auth-af925-default-rtdb.firebaseio.com",
     projectId: "auth-af925",
     storageBucket: "auth-af925.appspot.com",
     messagingSenderId: "361329399575",
     appId: "1:361329399575:web:4c1c8ac95a0573380cc952"
   };

 const app = initializeApp(firebaseConfig);
 const auth = getAuth();
 const provider = new GoogleAuthProvider()
 
 const signInButton = document.getElementById("signInButton");
 const signOutButton = document.getElementById("signOutButton");
 const accountLink = document.getElementById("accountLink");
 const message = document.getElementById("message");
 const userName = document.getElementById("userName");
 const userEmail = document.getElementById("userEmail");

 signOutButton.style.display = "none";
 message.style.display = "none";
 accountLink.style.display = "block";

 console.log(JSON.parse(localStorage.getItem("user")));

 
 const userSignIn = async() => {
   signInWithPopup(auth, provider)
   .then((result) => {
       const user = result.user
       localStorage.setItem("user", JSON.stringify(user));
       console.log(user);
   }).catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message
   })
 }
 
 const userSignOut = async() => {
   signOut(auth).then(() => {
       alert("You have signed out successfully!");
   }).catch((error) => {})
 }
 
 onAuthStateChanged(auth, (user) => {
   if(user) {
    console.log('firebase', user);
     signOutButton.style.display = "block";
     signInButton.style.display = "none";
     accountLink.style.display = "none";
     message.style.display = "block";
     userName.innerHTML = user.displayName;
     userEmail.innerHTML = user.email
   } else {
     signOutButton.style.display = "none";
     message.style.display = "none";
     accountLink.style.display = "block";
     signInButton.style.display = "block";
   }
 })
 
 signInButton.addEventListener('click', userSignIn);
 signOutButton.addEventListener('click', userSignOut);
 