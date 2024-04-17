
/*................................................................Details section...................*/

var Size = document.getElementById("SizePage");
var Details = document.getElementById("DetailsPage");
function openPage2(){
  SizePage.style.display = "block";
  DetailsPage.style.display = "none";
  ReviewPage.style.display = "none";
}

var Size = document.getElementById("SizePage");
var Details = document.getElementById("DetailsPage");
function openPage1(){
  SizePage.style.display = "none";
  DetailsPage.style.display = "block";
  ReviewPage.style.display = "none";
}

var Reviews = document.getElementById("ReviewPage");
function openPage3(){
  SizePage.style.display = "none";
  DetailsPage.style.display = "none"; 
  ReviewPage.style.display = "block";
}

  
  /*............................................Login / Create Account Forms ........................................*/
  let loginForm = document.getElementById("loginForm");
  let signupForm = document.getElementById("signupForm");
  let createAccount = document.getElementById("createAccount");
  let loginButton = document.getElementById("loginButton");
  
  createAccount.onclick = function(){
      loginForm.style.transform = "translateY(-120%)";
      signupForm.style.transform="translateY(-111%)";
  }
  loginButton.onclick = function(){
      signupForm.style.transform="translateY(120%)";
      loginForm.style.transform="translateY(0%)";
  }
  
  /*.....................................................................Shopping Cart..................................*/
  var Cart = document.getElementById("shoppingCart");
  var closeButton = document.getElementById("shoppingCart");

  function openCart(){
    shoppingCart.style.transform = "translateY(0%)";
    shoppingCart.style.display = "block"
    MenuLinks.style.display = "none";
  }
  function closeCart(){
    shoppingCart.style.transform = "translateY(-200%)";
    shoppingCart.style.display = "none"
  }
  /*...............................show password........................................*/

const password = document.getElementById ("password");
const checkbox = document.getElementById("checkbox");
checkbox.onchange = function (e) {
password. type = checkbox.checked ? "text" : "password";
};

const password2 = document.getElementById ("password2");
const checkbox2 = document.getElementById("checkbox2");
checkbox2.onchange = function (e) {
password2. type = checkbox2.checked ? "text" : "password";
};

 /*...............................Menu........................................*/
 var Menu = document.getElementById("MenuLinks");
 function openMenu(){
  MenuLinks.style.display = "block";
  Main.style.display = "none";
  siteInfo.style.display = "none";
  Contents.style.display = "none";
  shoppingCart.style.display = "none";
 }
 var closeButton = document.getElementById("MenuLinks");
 function closeMenu(){
  MenuLinks.style.display = "none";
  Main.style.display = "block";
  siteInfo.style.display = "block";
 }


   /*...............................Product image displays ON/OFF........................................*/
function displayImage(imageNumber) {
  var largeImage = document.getElementById("image1");
  var smallImage = document.getElementById("image" + imageNumber);
  largeImage.src = smallImage.src; // Update large image source
}


//...................checkout proccess.....................................................................
function checkout(){
  alert("Checkout process will be implemented Here!");
  shoppingCart.style.display = "none"
}

   
/*--------------------------------------------------------------------------------
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
     //userEmail.innerHTML = user.email
   } else {
     signOutButton.style.display = "none";
     message.style.display = "none";
     accountLink.style.display = "block";
     signInButton.style.display = "block";
   }
 })
 
 signInButton.addEventListener('click', userSignIn);
 signOutButton.addEventListener('click', userSignOut);
 --------------*/



