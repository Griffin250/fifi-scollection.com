

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
 const loginBtn = document.getElementById("loginBtn");
 const accountLink = document.getElementById("accountLink");
 const message = document.getElementById("message");
 const userName = document.getElementById("userName");
 const userEmail = document.getElementById("userEmail");

 
//................... Function to show user profile
const showUserProfile = (user) => {
  message.style.display = "block";
  signOutButton.style.display = "block";
  loginBtn.style.display = "none";
  signInButton.style.display = "block";
  accountLink.style.display = "none";    
  userName.innerHTML = user.display-Name;
  userEmail.innerHTML = user.email; 
};

//....................... Function to hide user profile
const hideUserProfile = () => {
  signOutButton.style.display = "none";
  message.style.display = "none";
  loginBtn.style.display = "block";
  accountLink.style.display = "block";
  signInButton.style.display = "block";
  userName.innerHTML = "user.display-Name";
  userEmail.innerHTML = "user.email";
};


if(loginBtn)
loginBtn.style.display = "none";
 if(signOutButton)
 signOutButton.style.display = "none";
 message.style.display = "block";
 if(accountLink)
 accountLink.style.display = "block";

 console.log(JSON.parse(localStorage.getItem("user")));

// Retrieve user data from localStorage on page load
 window.addEventListener('load', () => {
  let user = JSON.parse(localStorage.getItem("user"));
  document.querySelectorAll(".display-userName").forEach((elem) => {
    elem.innerHTML = user.displayName;
  });
  console.log('debugging', user);
 });
 
 // Function to sign in user with Google
 const userSignIn = async() => {
   signInWithPopup(auth, provider)
   .then((result) => {
       const user = result.user
       localStorage.setItem("user", JSON.stringify(user));
       console.log(user);
//Redirect the user to a new page on successful login.......
       window.location.href = "index.html";
   })
   .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message
   })
 // ...Check if user is already signed in
   const currentUser = auth.currentUser;
   if (currentUser){
    //...then redirect the user to the home page
    window.location.href = "index.html";
    return;
   }
 }
 
 // Function to sign out user
 const userSignOut = async() => {
   signOut(auth)
   .then(() => {
       alert("You have signed out successfully!");
       
   })
   .catch((error) => {})
 }
 

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
  if(user) {
    console.log('firebase', user);

    // Update user profile display
    showUserProfile(user);
  } 
  else {
    // Hide user profile display
    hideUserProfile();
  }
});

// Add event listener for sign in button click
 if(signInButton)
 signInButton.addEventListener('click', userSignIn);
// Add event listener for sign out button click
 if(signOutButton)
 signOutButton.addEventListener('click', userSignOut);
 