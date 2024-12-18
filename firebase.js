// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsSv_axhBRQEBq8ZEoe-anHBuTncNRTB8",
  authDomain: "loginform-958a4.firebaseapp.com",
  databaseURL: "https://loginform-958a4-default-rtdb.firebaseio.com",
  projectId: "loginform-958a4",
  storageBucket: "loginform-958a4.appspot.com",
  messagingSenderId: "1043085667540",
  appId: "1:1043085667540:web:6698a1f440697f78d65f41",
};

// .......................Initialize Firebase
const app = initializeApp(firebaseConfig);

//function to show  and hide message on  and after successful signup ......
function showMessage(message, divId) {
  var messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(function () {
    messageDiv.style.display = "none";
  }, 4000); // Hide the message after a 4 seconds
}

// Wait for DOM content to load before accessing elements
document.addEventListener("DOMContentLoaded", function () {
  const signUp = document.getElementById("submitSignUp");
  signUp.addEventListener("click", (event) => {
    event.preventDefault();

    const signUp = document.getElementById("submitSignUp");
    signUp.addEventListener("click", (event) => {
      event.preventDefault();

      const email = document.getElementById("rEmail").value;
      const password = document.getElementById("rPassword").value;
      const firstName = document.getElementById("fName").value;
      const lastName = document.getElementById("lName").value;

      const auth = getAuth();
      const db = getDatabase();

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const userData = {
            email: email,
            firstName: firstName,
            lastName: lastName,
          };
          showMessage("Account Created Successfully.!", "signUpMessage");
          //... Store user data in the Realtime Database
          set(ref(db, "users/" + user.uid), userData)
            // .....Redirect to another page after successful signup
            .then(() => {
              window.location.href = "index.html";
            })
            //....................function to handle errors......
            .catch((error) => {
              console.error("Error writing document", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode == "auth/email-already-in-use") {
            showMessage(
              '<i class="fa-solid fa-circle-exclamation"></i>  Email Address already Exists.!',
              "signUpMessage"
            );
          } else {
            showMessage("Unable to Create the User.!", "signUpMessage");
          }
        });
    });
  });
});

// ............function to let user sign in with the created account...............
const signIn = document.getElementById("submitSignIn");
signIn.addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showMessage("Login is successful", "signInMessage");

      const user = userCredential.user;
      localStorage.setItem("loggedInUserId", user.uid);
      window.location.href = "Home.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode == "auth/invalid-credential") {
        showMessage("Incorrect Email or Password", "signInMessage");
      } else {
        showMessage("Account doesnot Exist.!", "signInMessage");
      }
    });
});
